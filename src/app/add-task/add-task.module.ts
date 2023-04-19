import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';

@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AddTaskComponent }]),
    ReactiveFormsModule,
  ],
})
export class AddTaskModule {}
