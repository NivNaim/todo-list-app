import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { InboxTodosComponent } from './inbox-todos/inbox-todos.component';
import { TodayTodosComponent } from './today-todos/today-todos.component';
import { UpcomingTodosComponent } from './upcoming-todos/upcoming-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchBarComponent, ToolBarComponent, InboxTodosComponent, TodayTodosComponent, UpcomingTodosComponent, CompletedTodosComponent],
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchBarComponent, ToolBarComponent, TodayTodosComponent, UpcomingTodosComponent, CompletedTodosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
