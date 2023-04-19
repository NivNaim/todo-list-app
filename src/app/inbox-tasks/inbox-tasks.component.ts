import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inbox-tasks',
  templateUrl: './inbox-tasks.component.html',
})
export class InboxTasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasksService.resetTask();
        this.tasks = tasks.filter((task) => !task.isCompleted);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectTask(isChecked: boolean, taskId: string) {
    this.tasksService.selectTask(isChecked, taskId);
  }
}
