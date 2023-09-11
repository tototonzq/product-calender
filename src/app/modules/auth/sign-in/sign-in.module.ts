import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { signInRoutes } from './sign-in.routing';
import { ShareModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ShareModule, RouterModule.forChild(signInRoutes)],
  declarations: [SignInComponent],
})
export class SignInModule {}
