import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
  ],
  providers: [],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
