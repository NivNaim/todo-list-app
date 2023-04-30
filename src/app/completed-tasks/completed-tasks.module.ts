import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompletedTasksComponent } from './completed-tasks.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompletedTasksComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CompletedTasksComponent }]),
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
})
export class CompletedTasksModule {}
