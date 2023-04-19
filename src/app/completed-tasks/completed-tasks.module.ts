import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompletedTasksComponent } from './completed-tasks.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CompletedTasksComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CompletedTasksComponent }]),
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CompletedTasksModule {}
