import { Injectable, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: { id: string; title: string; date: string }[] = [];

  addTask(title: string, date: string) {
    const taskId = uuidv4();
    const task = {
      id: taskId,
      title: title,
      date: new Date(date).toISOString(),
    };
    this.tasks.push(task);
  }
}
