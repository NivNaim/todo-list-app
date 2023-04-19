import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxTasksComponent } from './inbox-tasks/inbox-tasks.component';

const appRoutes: Routes = [
  { path: '', component: InboxTasksComponent, pathMatch: 'full' },
  {
    path: 'today-todos',
    loadChildren: () =>
      import('./today-tasks/today-tasks.module').then(
        (m) => m.TodayTasksModule
      ),
  },
  {
    path: 'upcoming-todos',
    loadChildren: () =>
      import('./upcoming-tasks/upcoming-tasks.module').then(
        (m) => m.UpcomingTasksModule
      ),
  },
  {
    path: 'completed-todos',
    loadChildren: () =>
      import('./completed-tasks/completed-tasks.module').then(
        (m) => m.CompletedTasksModule
      ),
  },
  {
    path: 'add-todo',
    loadChildren: () =>
      import('./add-task/add-task.module').then((m) => m.AddTaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
