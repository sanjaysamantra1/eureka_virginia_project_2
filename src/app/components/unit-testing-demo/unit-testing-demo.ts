import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing-demo',
  imports: [],
  templateUrl: './unit-testing-demo.html',
  styleUrl: './unit-testing-demo.css',
})
export class UnitTestingDemo {
  add(a: number, b: number) {
    return a + b;
  }

  sumOfDigits(n: number) {
    let sum = 0;
    while (n != 0) {
      let rem = n % 10;
      sum = sum + rem;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  cars = ['Tata','Honda'];
  addNewCar(newCar:string){
    this.cars.push(newCar)
  }
}
