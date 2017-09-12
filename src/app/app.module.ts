import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FizzBuzzComponent} from './fizz-buzz/fizz-buzz.component';
import {FizzBuzzService} from './fizz-buzz/fizz-buzz.service';
import {UploadComponent} from './upload/upload.component';
import {UploadSummaryComponent} from './upload/upload-summary/upload-summary.component';
import {FileService} from './shared/file.service';
import {FileSizePipe} from './shared/file-size.pipe';
import {UploadDefaultSummaryComponent} from './upload/upload-summary/upload-default-summary.component';
import {UploadImageSummaryComponent} from './upload/upload-summary/upload-image-summary.component';
import {ImageService} from './shared/image.service';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent,
    UploadComponent,
    UploadSummaryComponent,
    UploadImageSummaryComponent,
    UploadDefaultSummaryComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FizzBuzzService,
    FileService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
