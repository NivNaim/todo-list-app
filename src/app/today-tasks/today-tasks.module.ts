import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TodayTasksComponent } from './today-tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodayTasksComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TodayTasksComponent }]),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TodayTasksModule {}
