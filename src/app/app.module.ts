import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
