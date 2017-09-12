import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size: number) {

    size /= 1024;

    if (size < 1024) {
      return size.toFixed(2) + ' kB';
    }

    size /= 1024;

    if (size < 1024) {
      return size.toFixed(2) + ' MB';
    }

  }

}
