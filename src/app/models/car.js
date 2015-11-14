var Car = (function () {
    function Car(id) {
        var _this = this;
        this.driver = '';
        this.tankCapacity = 100;
        this.hasDamage = false;
        this.id = id;
        setInterval(function () { return _this.reduceTankCapacity(); }, 1000);
    }
    Car.prototype.reduceTankCapacity = function () {
        var newCapacity = this.tankCapacity - Math.floor(Math.random() * 10);
        this.tankCapacity = newCapacity > 0 ? newCapacity : 0;
    };
    Car.prototype.refillTank = function (oil) {
        this.tankCapacity = this.tankCapacity + oil;
    };
    return Car;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Car;
//# sourceMappingURL=car.js.map