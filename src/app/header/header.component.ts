import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  }

  onDarkModeChange(isChecked: boolean): void {
    this.isDarkMode = isChecked;
    this.tasksService.darkModeChange(this.isDarkMode);
  }
}
