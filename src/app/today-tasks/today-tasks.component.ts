import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent {
  tasks: {
    id: string;
    title: string;
    date: string;
    isChecked: boolean;
    isCompleted: boolean;
  }[];
  isCheckedMode = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.resetTask();
    this.tasks = this.tasksService.tasks.filter((task) => {
      const today = new Date().toLocaleDateString('en-GB');
      return task.date === today && !task.isChecked;
    });
  }

  onSelectTask(isChecked: boolean, taskId: string) {
    this.tasksService.selectTask(isChecked, taskId);
  }
}
