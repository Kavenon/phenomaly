import {Injectable} from '@angular/core';

@Injectable()
export class UploadService {

  isImage(file): boolean {

    if (!file.type) {
      return false;
    }

    return file.type.startsWith('image/');

  }

}
