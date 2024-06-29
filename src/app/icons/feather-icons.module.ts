import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconComponent } from './feather-icon.component';
import { FeatherModule } from 'angular-feather';

@NgModule({
  declarations: [FeatherIconComponent],
  imports: [
    CommonModule
  ],
  exports: [FeatherIconComponent]
})
export class FeatherIconsModule { }