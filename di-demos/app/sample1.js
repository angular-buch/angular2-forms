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
var Engine = (function () {
    function Engine() {
    }
    Engine = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Engine);
    return Engine;
})();
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [Engine])
    ], Car);
    return Car;
})();
var injector = angular2_1.Injector.resolveAndCreate([Car, Engine]);
var car = injector.get(Car);
//# sourceMappingURL=sample1.js.map