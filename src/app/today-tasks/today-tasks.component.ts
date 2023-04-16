import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent {
  tasks: { id: string; title: string; date: string; isCompleted: boolean }[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => {
      const today = new Date().toLocaleDateString('en-GB');
      return task.date === today && !task.isCompleted;
    });
  }

  onSelectTask(isChecked: boolean) {
    console.log(isChecked);
  }
}
