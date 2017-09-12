import {Injectable} from '@angular/core';
import {ImageDimensions} from './image-dimensions';

@Injectable()
export class ImageService {

  fetchImage(file): Promise<string> {

    return new Promise((resolve => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    }));

  }

  fetchImageDimensions(imageSrc): Promise<ImageDimensions> {

    return new Promise((resolve => {

      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        resolve({
          width: image.width,
          height: image.height
        });
      };

    }));

  }

}
