import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentInputComponent } from './student-input/student-input.component';
import { StudentTableComponent } from './student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInputComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
