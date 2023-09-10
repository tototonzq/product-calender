import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { signUpRoutes } from './sign-up.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(signUpRoutes)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
