import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernComponent } from './modern.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModernComponent],
  exports: [ModernComponent],
})
export class ModernModule {}
