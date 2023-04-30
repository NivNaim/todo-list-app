import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [FooterComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [CommonModule, FooterComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
