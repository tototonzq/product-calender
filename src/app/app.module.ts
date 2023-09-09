import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ShareModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShareModule,
    RouterModule.forRoot(routes),
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
