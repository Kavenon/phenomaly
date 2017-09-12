import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FileService} from '../../shared/file.service';

@Component({
  selector: 'phy-upload-summary',
  templateUrl: './upload-summary.component.html',
  styleUrls: ['./upload-summary.component.scss']
})
export class UploadSummaryComponent implements OnChanges {

  @Input() file: File;
  isImage: boolean;

  constructor(private fileService: FileService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file']) {
      this.isImage = this.fileService.isImage(this.file);
    }
  }

}
