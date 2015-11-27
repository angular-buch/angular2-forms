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
var car_component_1 = require('./car-component');
var car_1 = require('../models/car');
var gas_service_1 = require('../models/gas-service');
var DashboardComponent = (function () {
    function DashboardComponent(gasService) {
        this.gasService = gasService;
        this.totalDamages = 0;
        this.bestPrice = 0;
        this.cars = [
            new car_1.default('ng-car 1.0'),
            new car_1.default('ng-car 2.0')];
    }
    DashboardComponent.prototype.refillTank = function (car, amountOfMoneyToSpend) {
        var _this = this;
        this.gasService
            .getBestPrice()
            .subscribe(function (bestPrice) {
            _this.bestPrice = bestPrice;
            car.refillTank(amountOfMoneyToSpend / bestPrice);
        }, function (err) { return console.error(err); });
    };
    DashboardComponent.prototype.notifyCarDamaged = function () {
        this.totalDamages++;
    };
    DashboardComponent = __decorate([
        angular2_1.Component({ selector: 'dashboard' }),
        angular2_1.View({
            directives: [car_component_1.default, angular2_1.NgFor, angular2_1.NgIf],
            templateUrl: 'app/components/dashboard.tpl.html'
        }), 
        __metadata('design:paramtypes', [gas_service_1.default])
    ], DashboardComponent);
    return DashboardComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardComponent;
//# sourceMappingURL=dashboard-component.js.map