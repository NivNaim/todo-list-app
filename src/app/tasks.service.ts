import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: { id: string; title: string; date: string }[];

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
    console.log(momentDate);
    if (!momentDate) {
      throw new Error('Invalid date format.');
    }
    console.log('formattedDate:', momentDate);
    console.log('tasks before:', this.tasks);
    const task = {
      id: taskId,
      title: title,
      date: momentDate,
    };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    console.log('tasks after:', this.tasks);
  }
}
