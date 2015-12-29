import { Component, View , Input, Output, EventEmitter } from 'angular2/core';
import Car from '../models/car';

@Component({ selector: 'car' })
@View({
  template: `
  <div class="panel panel-default">
  <div class="panel-heading">ID {{ model?.id | uppercase }}</div>
    <table class="table table-striped">
      <tr
        [class.success]="model?.hasDamage == false"
        [class.danger]="model?.hasDamage == true">
        <td>Damaged</td>
        <td>{{ model?.hasDamage }}</td>
      </tr>
      <tr
        [class.warning]="model?.tankCapacity < 60"
        [class.danger]="model?.tankCapacity < 20">
        <td>Tank Capacity</td>
        <td>{{ model?.tankCapacity | number:'1.2-2' }} liter</td>
      </tr>
      <tr>
        <td>Driver {{ model?.driver }}</td>
        <td>
        <input
          [value]="model?.driver"
          [disabled]="model == null"
          (input)="model.driver=$event.target.value"
          class="form-control"
          placeholder="Insert driver...">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button
            (click)="stoneImpact()"
            [disabled]="model == null"
            class="btn btn-danger">
            &#9888; Stone impact
          </button>
        </td>
      </tr>
    </table>
  </div>
  `
})
export default class CarComponent {
  @Input() model: Car;
  @Output() damaged: EventEmitter<Car> = new EventEmitter<Car>();

  stoneImpact() {
    this.model.hasDamage = true;
    this.damaged.next(this.model);
  }
}
