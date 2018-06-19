import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NavTopBarComponent } from './nav-top-bar/nav-top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    NavTopBarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
