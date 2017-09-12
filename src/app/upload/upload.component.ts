import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'phy-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  filename = '';
  inputId: string;
  @Input() inputName: string;

  constructor() {
  }

  ngOnInit(): void {
    this.inputId = `file-upload--${this.inputName}`;
  }

  update($event): void {

    const files = $event.target.files;
    if (files && files.length > 0) {
      this.file = files[0];
      this.filename = this.file.name;
    }

  }
}
