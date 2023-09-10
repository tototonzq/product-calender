import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { signInRoutes } from './sign-in.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(signInRoutes)],
  declarations: [SignInComponent],
})
export class SignInModule {}
