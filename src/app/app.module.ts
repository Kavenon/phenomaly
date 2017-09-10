import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FizzBuzzComponent} from './fizz-buzz/fizz-buzz.component';
import {FizzBuzzService} from './fizz-buzz/fizz-buzz.service';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FizzBuzzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
