import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isDarkMode: boolean;
  subscription: Subscription;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    this.subscription = this.tasksService.isDarkModeChange.subscribe(
      (isDarkMode) => (this.isDarkMode = isDarkMode)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
