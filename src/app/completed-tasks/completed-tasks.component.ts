import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks.filter((task) => task.isCompleted);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteTask(taskId: string) {
    const task = this.tasksService.findTaskById(taskId);
    task.isCompleted = false;
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }
}
