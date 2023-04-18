import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

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

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => task.isCompleted);
  }

  onDeleteTask(taskId: string) {
    const task = this.tasksService.findTaskById(taskId);
    task.isCompleted = false;
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }
}
