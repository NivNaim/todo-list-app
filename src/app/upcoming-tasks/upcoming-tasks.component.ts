import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrls: ['./upcoming-tasks.component.scss'],
})
export class UpcomingTasksComponent {
  tasks: { id: string; title: string; date: string }[];
  @ViewChild('radio', { static: false }) inputRadioElement: ElementRef;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks.filter((task) => {
      const today = new Date();
      const twoDaysFromNow = new Date(today.setDate(today.getDate() + 2));
      const formattedDate = twoDaysFromNow.toLocaleDateString('en-GB');
      return task.date < formattedDate;
    });
  }

  onSelectTask() {
    this.inputRadioElement.nativeElement.checked =
      !this.inputRadioElement.nativeElement.checked;
  }
}
