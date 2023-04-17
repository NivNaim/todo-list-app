import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() isCheckedMode = false;

  constructor(private tasksService: TasksService) {}

  onMarkAsComplete() {
    this.tasksService.MarkAsComplete();
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }

  onDeleteTasks() {
    this.tasksService.tasks.forEach((task) => {
      if (task.isChecked) {
        this.tasksService.deleteTask(task.id);
      }
    });
    this.tasksService.saveTasks();
    this.tasksService.refreshWindow();
  }
}
