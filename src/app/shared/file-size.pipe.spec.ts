import {FileSizePipe} from './file-size.pipe';

const fileSizePipe = new FileSizePipe();

describe('FileSizePipe', () => {

  describe('when given bytes less than 1kB', () => {

    it('should return value in kB', () => {
      expect(fileSizePipe.transform(512)).toEqual('0.50 kB');
    });

  });

  describe('when given bytes less more 1kB but less than 1MB', () => {

    it('should return value in kB', () => {
      expect(fileSizePipe.transform(2 * 1024)).toEqual('2.00 kB');
    });

  });

  describe('when given bytes less more 1MB but less than 1GB', () => {

    it('should return value in MB', () => {
      expect(fileSizePipe.transform(2 * 1024 * 1024)).toEqual('2.00 MB');
    });

  });

  describe('when given bytes more 1GB', () => {

    it('should return value in MB', () => {
      expect(fileSizePipe.transform(2 * 1024 * 1024 * 1024)).toEqual('2048.00 MB');
    });

  });

});
