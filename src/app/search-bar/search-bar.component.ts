import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  inputValue = '';

  constructor(private tasksService: TasksService) {}

  onInputChange() {
    this.tasksService.FilterTasksByInput(this.inputValue);
  }
}
