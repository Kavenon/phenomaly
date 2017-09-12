import {FileService} from './file.service';

const fileService = new FileService();

describe('FileService', () => {

  describe('when given file without type', () => {

    it('should return false', () => {
      expect(fileService.isImage({})).toEqual(false);
    });

  });

  describe('when given image file', () => {

    it('should return true', () => {
      expect(fileService.isImage({type: 'image/png'})).toEqual(true);
    });

  });

  describe('when given pdf file', () => {

    it('should return false', () => {
      expect(fileService.isImage({type: 'application/pdf'})).toEqual(false);
    });

  });

});
