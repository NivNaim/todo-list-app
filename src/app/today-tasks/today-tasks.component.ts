import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
})
export class TodayTasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;
  isLoading = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasksService.resetTask();
        this.tasks = tasks.filter((task) => {
          const today = new Date().toLocaleDateString('en-GB');
          return task.date === today && !task.isCompleted;
        });
      }
    );

    this.subscription = this.tasksService.searchInput
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.isLoading = true;
        this.tasksService.filterTasks(value);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelectTask(isChecked: boolean, taskId: string): void {
    this.tasksService.selectTask(isChecked, taskId);
  }
}
