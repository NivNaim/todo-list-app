import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: {
    id: string;
    title: string;
    date: string;
    isChecked: boolean;
    isCompleted: boolean;
  }[];
  isCheckedModeFlag = false;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) {
      this.tasks = [];
    }
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
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
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
    this.tasks.forEach((task) => {
      if (task.isChecked) {
        task.isCompleted = true;
        task.isChecked = false;
      }
    });

    this.saveTasks();
  }

  resetTask() {
    this.tasks.forEach((task) => (task.isChecked = false));
    this.isCheckedModeFlag = false;
  }

  refreshWindow() {
    window.location.reload();
  }
}
