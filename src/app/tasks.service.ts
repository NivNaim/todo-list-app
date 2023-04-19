import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasksChanged = new BehaviorSubject<Task[]>([]);
  private tasks: Task[];
  isCheckedModeFlag = false;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) {
      this.tasks = [];
    }
    this.tasksChanged.next(this.tasks.slice());
  }

  addTask(title: string, date: string) {
    if (!title || !date) {
      throw new Error('Title and date are required.');
    }

    const taskId = uuidv4();
    const momentDate = moment(date).format('DD/MM/YYYY');

    if (!momentDate) {
      throw new Error('Invalid date format.');
    }

    const task = {
      id: taskId,
      title: title,
      date: momentDate,
      isChecked: false,
      isCompleted: false,
    };

    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTasks(ids: string[]) {
    if (ids.length === 0) {
      return;
    }

    this.tasks = this.tasks.filter((task) => !ids.includes(task.id));
    this.tasksChanged.next(this.tasks.slice());
    this.saveTasks();
  }

  selectTask(isChecked: boolean, id: string) {
    const task = this.findTaskById(id);
    task.isChecked = isChecked;
    this.isCheckedModeFlag = this.isCheckedMode();
  }

  findTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  isCheckedMode() {
    const tasks = this.tasks.filter((task) => task.isChecked);
    return tasks.length !== 0;
  }

  MarkAsComplete() {
    const completedTasks = this.tasks.filter((task) => task.isChecked);

    if (completedTasks.length > 0) {
      completedTasks.forEach((task) => {
        task.isCompleted = true;
        task.isChecked = false;
      });

      this.tasksChanged.next(this.tasks.slice());
      this.saveTasks();
    }
  }

  changeToUncompleted(id: string) {
    const task = this.findTaskById(id);
    if (!task || !task.isCompleted) {
      return;
    }
    task.isCompleted = false;

    this.tasksChanged.next(this.tasks.slice());
    this.saveTasks();
  }

  resetTask() {
    this.tasks.forEach((task) => (task.isChecked = false));
    this.isCheckedModeFlag = false;
  }

  FilterTasksByInput(inputValue: string) {
    const filterTasks = this.tasks.filter((task) =>
      task.title.toLowerCase().startsWith(inputValue)
    );
    this.tasksChanged.next(filterTasks.slice());
  }
}
