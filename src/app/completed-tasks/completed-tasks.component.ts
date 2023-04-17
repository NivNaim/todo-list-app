import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent {
  tasks: {
    id: string;
    title: string;
    date: string;
    isChecked: boolean;
    isCompleted: boolean;
  }[];

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => task.isCompleted);
  }

  onDeleteTask(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
}
