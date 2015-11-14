var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var GasService = (function () {
    function GasService(http) {
        this.http = http;
        this.apiUrl = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=52.52099975265203&lng=13.43803882598877&rad=4&sort=price&type=diesel';
        this.apiKey = '&apikey=acc6ad94-2b49-9190-5fcf-94d683f66887';
        this.apiUrlAndKey = this.apiUrl + this.apiKey;
    }
    GasService.prototype.getBestPrice = function () {
        return this.http.get(this.apiUrlAndKey)
            .map(function (result) { return result.json().stations; })
            .map(function (stations) {
            return stations[0].price;
        });
    };
    GasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GasService);
    return GasService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GasService;
//# sourceMappingURL=gasService.js.map