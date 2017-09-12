import {Component, Input} from '@angular/core';

@Component({
  selector: 'phy-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  file: File;
  filename = '';
  @Input() inputName: string;

  constructor() { }

  update($event): void {

    const files = $event.target.files;
    if (files && files.length > 0) {
      this.file = files[0];
      this.filename = this.file.name;
    }

  }
}
