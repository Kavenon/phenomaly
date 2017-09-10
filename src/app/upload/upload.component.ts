import {Component, Input} from '@angular/core';

@Component({
  selector: 'phy-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  filename = '';
  @Input() inputName: string;

  constructor() { }

  update($event): void {

    const files = $event.target.files;
    if (files && files.length > 0) {
      this.filename = files[0].name;
    }

  }
}
