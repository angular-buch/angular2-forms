import { Component, View, NgFor, NgIf } from 'angular2/angular2';

import CarComponent from '../car/car.component';
import Car from '../../models/car';
import GasService from '../../models/gasService';

@Component({selector: 'dashboard'})
@View({
  directives: [CarComponent, NgFor, NgIf],
  templateUrl: 'app/components/dashboard/dashboard.tpl.html'
})
export default class DashboardComponent {
  cars: Array<Car>;
  totalDamages: number = 0;
  bestPrice: number = 0;

  constructor(private gasService: GasService) {
    this.cars = [
      new Car('ng-car 1.0'),
      new Car('ng-car 2.0')]
  }

  refillTank(car: Car, amountOfMoneyToSpend: number) {

    this.gasService
      .getBestPrice()
      .subscribe((bestPrice: number) => {

        this.bestPrice = bestPrice;
        car.refillTank(amountOfMoneyToSpend / bestPrice);
      },
      err => console.error(err));
  }

  notifyCarDamaged() {
    this.totalDamages++;
  }
}
