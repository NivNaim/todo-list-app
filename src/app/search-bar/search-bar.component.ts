import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  inputValue = '';

  constructor(private tasksService: TasksService) {}

  onInputChange(): void {
    this.tasksService.inputChanged(this.inputValue);
  }
}
