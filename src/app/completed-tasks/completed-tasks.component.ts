import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks.filter((task) => task.isCompleted);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChangeToUncompleted(taskId: string): void {
    this.subscription = this.tasksService.tasksChanged
      .pipe(take(1))
      .subscribe((tasks: Task[]) => {
        this.tasksService.changeToUncompleted(taskId);
      });
  }
}
