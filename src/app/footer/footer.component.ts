import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  subscription: Subscription;

  constructor(public tasksService: TasksService, private router: Router) {}

  onMarkAsComplete() {
    this.tasksService.MarkAsComplete();
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }

  onDeleteTasks() {
    this.tasksService.tasksChanged.subscribe((task: Task[]) => {
      task.forEach((task) => {
        if (task.isChecked) {
          this.tasksService.deleteTask(task.id);
        }
      });
    });
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }

  onAddTask() {
    this.router.navigate(['/add-todo']);
  }
}
