import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayTodosComponent } from './today-todos/today-todos.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
