import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [CommonModule, FooterComponent],
})
export class SharedModule {}
