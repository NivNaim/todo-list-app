import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { InboxTasksComponent } from './inbox-tasks/inbox-tasks.component';
import { UpcomingTasksComponent } from './upcoming-tasks/upcoming-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ToolBarComponent,
    InboxTasksComponent,
    TodayTasksComponent,
    UpcomingTasksComponent,
    CompletedTasksComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
