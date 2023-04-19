import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { UpcomingTasksComponent } from './upcoming-tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UpcomingTasksComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: UpcomingTasksComponent }]),
    SharedModule,
  ],
})
export class UpcomingTasksModule {}
