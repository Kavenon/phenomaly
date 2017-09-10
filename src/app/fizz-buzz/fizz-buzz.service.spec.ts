import {FizzBuzzService} from './fizz-buzz.service';

const fizzBuzzService = new FizzBuzzService();

describe('FizzBuzzService', () => {

  describe('when given number divisible by 3', () => {

    it('should return Fizz', () => {
      expect(fizzBuzzService.generate(3)).toEqual('Fizz');
    });

  });

  describe('when given number divisible by 5', () => {

    it('should return Buzz', () => {
      expect(fizzBuzzService.generate(5)).toEqual('Buzz');
    });

  });

  describe('when given number divisible by 15', () => {

    it('should return FizzBuzz', () => {
      expect(fizzBuzzService.generate(15)).toEqual('FizzBuzz');
    });

  });

  describe('when given number is neither divisible by 3 nor 5', () => {

    it('should return null', () => {
      expect(fizzBuzzService.generate(17)).toBeNull();
    });

  });

});
