import { Injectable, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: [{ id: string; title: string; date: Date }];

  addTask() {}
}
