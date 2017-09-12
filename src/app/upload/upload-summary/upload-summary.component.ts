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
  imageSrc = '';
  imageWidth: number;
  imageHeight: number;

  constructor(private fileService: FileService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file']) {
      this.isImage = this.fileService.isImage(this.file);

      // Todo: refactor

      this.imageSrc = null;
      this.imageWidth = 0;
      this.imageHeight = 0;
      if (this.isImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = reader.result;

          const image = new Image();
          image.src = this.imageSrc;
          image.onload = () => {
            this.imageWidth = image.width;
            this.imageHeight = image.height;
          };

        };
        reader.readAsDataURL(this.file);
      }
      // Todoend ========================
    }
  }

  onImageLoad($event): void {
    console.log('on image load', $event, $event.target);
  }

}
