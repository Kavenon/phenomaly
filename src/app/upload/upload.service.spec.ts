import {UploadService} from './upload.service';

const uploadService = new UploadService();

describe('UploadService', () => {

  describe('when given file without type', () => {

    it('should return false', () => {
      expect(uploadService.isImage({})).toEqual(false);
    });

  });

  describe('when given image file', () => {

    it('should return true', () => {
      expect(uploadService.isImage({type: 'image/png'})).toEqual(true);
    });

  });

  describe('when given pdf file', () => {

    it('should return false', () => {
      expect(uploadService.isImage({type: 'application/pdf'})).toEqual(false);
    });

  });

});
