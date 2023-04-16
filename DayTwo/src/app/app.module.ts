import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputEraseComponent } from './Components/input-erase/input-erase.component';
import { ImageSliderComponent } from './Components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEraseComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
