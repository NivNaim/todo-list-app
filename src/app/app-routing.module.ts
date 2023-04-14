import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingTasksComponent } from './upcoming-tasks/upcoming-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { InboxTasksComponent } from './inbox-tasks/inbox-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

const appRoutes: Routes = [
  { path: '', component: InboxTasksComponent, pathMatch: 'full' },
  { path: 'today-todos', component: TodayTasksComponent },
  { path: 'upcoming-todos', component: UpcomingTasksComponent },
  { path: 'completed-todos', component: CompletedTasksComponent },
  { path: 'add-todo', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
