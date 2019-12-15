import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBirthdaysComponent } from './birthday/view-birthdays/view-birthdays.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ErrorSnackbarComponent } from './error/error-snackbar/error-snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewBirthdaysComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [ErrorSnackbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
