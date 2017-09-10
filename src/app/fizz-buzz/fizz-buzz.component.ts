import {Component} from '@angular/core';
import {FizzBuzzService} from './fizz-buzz.service';

@Component({
  selector: 'phy-fizz-buzz',
  templateUrl: 'fizz-buzz.component.html',
  styleUrls: ['fizz-buzz.component.scss']
})
export class FizzBuzzComponent {

  counter = 0;
  result: string;

  constructor(private fizzBuzzService: FizzBuzzService) {

  }

  increment(): void {
    this.counter++;
    this.result = this.fizzBuzzService.generate(this.counter);
  }

}
