import {Component, Input} from '@angular/core';

@Component({
  selector: 'phy-upload-default-summary',
  templateUrl: './upload-default-summary.component.html'
})
export class UploadDefaultSummaryComponent {

  @Input() file: File;

}
