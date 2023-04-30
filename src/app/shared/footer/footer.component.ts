import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Router } from '@angular/router';
import { Task } from '../../task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  subscription: Subscription;

  constructor(public tasksService: TasksService, private router: Router) {}

  onMarkAsComplete(): void {
    this.tasksService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasksService.markAsComplete();
    });
  }

  onDeleteTasks(): void {
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        const idsToDelete = tasks
          .filter((task) => task.isChecked)
          .map((task) => task.id);
        this.tasksService.deleteTasks(idsToDelete).then(() => {
          this.subscription.unsubscribe();
        });
      }
    );
  }

  onAddTask(): void {
    this.router.navigate(['/add-todo']);
  }
}
