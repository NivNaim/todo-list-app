import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayTodosComponent } from './today-todos/today-todos.component';
import { UpcomingTodosComponent } from './upcoming-todos/upcoming-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'today-todos', component: TodayTodosComponent },
  { path: 'upcoming-todos', component: UpcomingTodosComponent },
  { path: 'completed-todos', component: CompletedTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
