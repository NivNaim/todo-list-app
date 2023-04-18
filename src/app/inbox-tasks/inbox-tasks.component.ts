import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-inbox-tasks',
  templateUrl: './inbox-tasks.component.html',
  styleUrls: ['./inbox-tasks.component.scss'],
})
export class InboxTasksComponent implements OnInit {
  tasks: {
    id: string;
    title: string;
    date: string;
    isChecked: boolean;
    isCompleted: boolean;
  }[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.resetTask();
    this.tasks = this.tasksService.tasks.filter((task) => !task.isCompleted);
  }

  onSelectTask(isChecked: boolean, taskId: string) {
    this.tasksService.selectTask(isChecked, taskId);
  }
}
