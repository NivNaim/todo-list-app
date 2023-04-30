import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IDBPDatabase, openDB } from 'idb';
import { BehaviorSubject, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasksChanged = new BehaviorSubject<Task[]>([]);
  searchInput = new Subject<string>();
  isDarkModeChange = new Subject<boolean>();
  private tasks: Task[];
  private dbPromise: Promise<IDBPDatabase>;
  isCheckedModeFlag = false;

  constructor() {
    this.dbPromise = openDB('tasks-db', 1, {
      upgrade(db) {
        db.createObjectStore('tasks', { keyPath: 'id' });
      },
    });

    this.fetchTasksFromDB().then((tasks) => {
      this.tasks = tasks;
      this.tasksChanged.next(this.tasks.slice());
    });
  }

  async addTask(title: string, date: string): Promise<void> {
    if (!title || !date) {
      throw new Error('Title and date are required.');
    }

    const momentDate = moment(date).format('DD/MM/YYYY');
    if (!momentDate) {
      throw new Error('Invalid date format.');
    }

    const taskId = uuidv4();
    const task = {
      id: taskId,
      title: title,
      date: momentDate,
      isChecked: false,
      isCompleted: false,
    };

    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    await this.saveTaskToDB(task);
  }

  async saveTaskToDB(task: Task): Promise<void> {
    const db = await this.dbPromise;
    const tx = db.transaction('tasks', 'readwrite');
    const store = tx.objectStore('tasks');
    await store.put(task);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => {
        resolve();
      };
      tx.onerror = () => {
        reject(tx.error);
      };
    });
  }

  async fetchTasksFromDB(): Promise<Task[]> {
    const db = await this.dbPromise;
    const tx = db.transaction('tasks', 'readonly');
    const store = tx.objectStore('tasks');
    const tasks = await store.getAll();
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => {
        resolve();
      };
      tx.onerror = () => {
        reject(tx.error);
      };
    });
    return tasks;
  }

  async deleteTasks(ids: string[]): Promise<void> {
    if (ids.length === 0) {
      return;
    }

    const tasksToDelete = this.tasks.filter((task) => ids.includes(task.id));
    const db = await this.dbPromise;
    const tx = db.transaction('tasks', 'readwrite');
    const store = tx.objectStore('tasks');

    tasksToDelete.forEach((task) => store.delete(task.id));
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => {
        resolve();
      };
      tx.onerror = () => {
        reject(tx.error);
      };
    });

    this.tasks = this.tasks.filter((task) => !ids.includes(task.id));
    this.tasksChanged.next(this.tasks);
  }

  async selectTask(isChecked: boolean, id: string): Promise<void> {
    const task = this.findTaskById(id);
    task.isChecked = isChecked;
    this.isCheckedModeFlag = this.isCheckedMode();
    await this.saveTaskToDB(task);
  }

  findTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  isCheckedMode(): boolean {
    const tasks = this.tasks.filter((task) => task.isChecked);
    return tasks.length !== 0;
  }

  markAsComplete(): void {
    const completedTasks = this.tasks.filter((task) => task.isChecked);

    if (completedTasks.length > 0) {
      completedTasks.forEach(async (task) => {
        task.isCompleted = true;
        task.isChecked = false;
        await this.saveTaskToDB(task);
      });

      this.tasksChanged.next(this.tasks.slice());
    }
  }

  async changeToUncompleted(id: string): Promise<void> {
    const task = this.findTaskById(id);
    if (!task || !task.isCompleted) {
      return;
    }
    task.isCompleted = false;
    await this.dbPromise;
    this.tasksChanged.next(this.tasks.slice());
  }

  resetTask(): void {
    if (!this.tasks) {
      return;
    }

    this.tasks.forEach((task) => {
      task.isChecked = false;
      this.saveTaskToDB(task);
    });
    this.isCheckedModeFlag = false;
  }

  async filterTasks(inputValue: string): Promise<void> {
    const db = await this.dbPromise;
    const tx = db.transaction('tasks', 'readonly');
    const store = tx.objectStore('tasks');
    const filterTasks: Task[] = [];
    await store.openCursor().then(function cursorIterate(cursor) {
      if (!cursor) {
        return;
      }

      const task = cursor.value;
      if (task.title.toLowerCase().startsWith(inputValue)) {
        filterTasks.push(task);
      }

      return cursor.continue().then(cursorIterate);
    });

    this.tasksChanged.next(filterTasks);
  }

  inputChanged(inputValue: string): void {
    this.searchInput.next(inputValue);
  }

  darkModeChange(isDarkMode: boolean): void {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
    this.isDarkModeChange.next(isDarkMode);
  }
}
