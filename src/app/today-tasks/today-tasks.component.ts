import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
})
export class TodayTasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasksService.resetTask();
        this.tasks = tasks.filter((task) => {
          const today = new Date().toLocaleDateString('en-GB');
          return task.date === today && !task.isCompleted;
        });
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
