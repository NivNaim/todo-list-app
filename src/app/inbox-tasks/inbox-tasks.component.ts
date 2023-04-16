import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-inbox-tasks',
  templateUrl: './inbox-tasks.component.html',
  styleUrls: ['./inbox-tasks.component.scss'],
})
export class InboxTasksComponent implements OnInit {
  tasks: { id: string; title: string; date: string; isCompleted: boolean }[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => !task.isCompleted);
  }

  onSelectTask(isChecked: boolean, taskId: string) {
    const task = this.tasksService.findTaskById(taskId);
    task.isCompleted = isChecked;
    this.tasksService.saveTasks();
  }
}
