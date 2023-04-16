import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent {
  tasks: { id: string; title: string; date: string; isCompleted: boolean }[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => task.isCompleted);
  }

  onSelectTask(isChecked: boolean, taskId: string) {
    console.log(isChecked);
  }
}
