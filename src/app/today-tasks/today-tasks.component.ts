import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent {
  tasks: { id: string; title: string; date: string }[];
  @ViewChild('radio', { static: false }) inputRadioElement: ElementRef;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => {
      const today = new Date().toLocaleDateString('en-GB');
      return task.date === today;
    });
    console.log(this.tasks);
  }

  onSelectTask() {
    this.inputRadioElement.nativeElement.checked =
      !this.inputRadioElement.nativeElement.checked;
  }
}
