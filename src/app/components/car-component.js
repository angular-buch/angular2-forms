var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var car_1 = require('../models/car');
var CarComponent = (function () {
    function CarComponent() {
        this.damaged = new angular2_1.EventEmitter();
    }
    CarComponent.prototype.stoneImpact = function () {
        this.model.hasDamage = true;
        this.damaged.next(this.model);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', car_1.default)
    ], CarComponent.prototype, "model", void 0);
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], CarComponent.prototype, "damaged", void 0);
    CarComponent = __decorate([
        angular2_1.Component({ selector: 'car' }),
        angular2_1.View({
            template: "\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">ID {{ model?.id | uppercase }}</div>\n    <table class=\"table table-striped\">\n      <tr\n        [class.success]=\"model?.hasDamage == false\"\n        [class.danger]=\"model?.hasDamage == true\">\n        <td>Damaged</td>\n        <td>{{ model?.hasDamage }}</td>\n      </tr>\n      <tr\n        [class.warning]=\"model?.tankCapacity < 60\"\n        [class.danger]=\"model?.tankCapacity < 20\">\n        <td>Tank Capacity</td>\n        <td>{{ model?.tankCapacity | number:'1.2-2' }} liter</td>\n      </tr>\n      <tr>\n        <td>Driver {{ model?.driver }}</td>\n        <td>\n        <input\n          [value]=\"model?.driver\"\n          [disabled]=\"model == null\"\n          (input)=\"model.driver=$event.target.value\"\n          class=\"form-control\"\n          placeholder=\"Insert driver...\">\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <button\n            (click)=\"stoneImpact()\"\n            [disabled]=\"model == null\"\n            class=\"btn btn-danger\">\n            &#9888; Stone impact\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CarComponent);
    return CarComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CarComponent;
//# sourceMappingURL=car-component.js.map