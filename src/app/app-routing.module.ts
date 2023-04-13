import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingTodosComponent } from './upcoming-todos/upcoming-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { AppComponent } from './app.component';
import { TodayTodosComponent } from './today-todos/today-todos.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  { path: 'today-todos', component: TodayTodosComponent },
  { path: 'upcoming-todos', component: UpcomingTodosComponent },
  { path: 'completed-todos', component: CompletedTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
