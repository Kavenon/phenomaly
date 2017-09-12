import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FizzBuzzComponent} from './fizz-buzz/fizz-buzz.component';
import {FizzBuzzService} from './fizz-buzz/fizz-buzz.service';
import { UploadComponent } from './upload/upload.component';
import {UploadSummaryComponent} from './upload/upload-summary/upload-summary.component';
import {FileService} from './shared/file.service';
import {FileSizePipe} from './shared/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent,
    UploadComponent,
    UploadSummaryComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FizzBuzzService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
