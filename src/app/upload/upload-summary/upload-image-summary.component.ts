import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ImageService} from '../../shared/image.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'phy-upload-image-summary',
  templateUrl: './upload-image-summary.component.html'
})
export class UploadImageSummaryComponent implements OnChanges {

  @Input() file: File;

  imageSrc: SafeResourceUrl;
  imageWidth: number;
  imageHeight: number;

  clear(): void {
    this.imageSrc = null;
    this.imageWidth = 0;
    this.imageHeight = 0;
  }

  constructor(private imageService: ImageService, private domSanitizer: DomSanitizer) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file']) {

      this.clear();
      this.imageService.fetchImageSrc(this.file)
        .then((imageSrc) => {
          this.imageSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(imageSrc);
          return imageSrc;
        })
        .then(this.imageService.fetchImageDimensions)
        .then((imageDimensions) => {
          this.imageWidth = imageDimensions.width;
          this.imageHeight = imageDimensions.height;
        });

    }
  }

}
