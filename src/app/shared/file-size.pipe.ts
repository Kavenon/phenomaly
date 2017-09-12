import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeInBytes: number) {

    sizeInBytes /= 1024;

    if (sizeInBytes < 1024) {
      return sizeInBytes.toFixed(2) + ' kB';
    }

    sizeInBytes /= 1024;

    return sizeInBytes.toFixed(2) + ' MB';

  }

}
