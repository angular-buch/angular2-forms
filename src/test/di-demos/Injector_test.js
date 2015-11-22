var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
var GasService = (function () {
    function GasService() {
    }
    return GasService;
})();
var Dashboard = (function () {
    function Dashboard(gasService) {
        this.gasService = gasService;
    }
    Dashboard = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [GasService])
    ], Dashboard);
    return Dashboard;
})();
testing_1.describe("Injector", function () {
    testing_1.it("should be able to resolve and inject dependencies (shorthand syntax)", function () {
        var injector = angular2_1.Injector.resolveAndCreate([
            Dashboard,
            GasService]);
        var dashboard = injector.get(Dashboard);
        testing_1.expect(dashboard instanceof Dashboard).toBe(true);
        testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
    });
    testing_1.describe("provide", function () {
        testing_1.it("should map a TYPE token to a configuration object", function () {
            var injector = angular2_1.Injector.resolveAndCreate([
                angular2_1.provide(Dashboard, { useClass: Dashboard }),
                angular2_1.provide(GasService, { useClass: GasService }),
            ]);
            var dashboard = injector.get(Dashboard);
            testing_1.expect(dashboard instanceof Dashboard).toBe(true);
            testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
        });
        testing_1.it("should map a STRING token to a configuration object [useClass]", function () {
            var injector = angular2_1.Injector.resolveAndCreate([
                angular2_1.provide('DASHBOARD', { useClass: Dashboard }),
                angular2_1.provide(GasService, { useClass: GasService }),
            ]);
            var dashboard = injector.get('DASHBOARD');
            testing_1.expect(dashboard instanceof Dashboard).toBe(true);
            testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
        });
        testing_1.describe("configuration object", function () {
            testing_1.it("should have a recipe for providing values [useValue]", function () {
                var injector = angular2_1.Injector.resolveAndCreate([
                    angular2_1.provide('TEST', { useValue: 'Hello Angular2' })
                ]);
                var test = injector.get('TEST');
                testing_1.expect(test).toBe('Hello Angular2');
            });
            testing_1.it("should have a recipe for providing aliases [useExisting]", function () {
                var DashboardAlias = (function () {
                    function DashboardAlias() {
                    }
                    return DashboardAlias;
                })();
                ;
                var injector = angular2_1.Injector.resolveAndCreate([
                    angular2_1.provide(Dashboard, { useClass: Dashboard }),
                    angular2_1.provide(GasService, { useClass: GasService }),
                    angular2_1.provide(DashboardAlias, { useExisting: Dashboard }),
                ]);
                var dashboard = injector.get(DashboardAlias);
                testing_1.expect(dashboard instanceof Dashboard).toBe(true);
                testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
            });
            testing_1.it("should have a recipe for providing factories [useFactory]", function () {
                var factory = function () {
                    var gasService = new GasService();
                    return new Dashboard(gasService);
                };
                var injector = angular2_1.Injector.resolveAndCreate([
                    angular2_1.provide(Dashboard, { useFactory: factory })
                ]);
                var dashboard = injector.get(Dashboard);
                testing_1.expect(dashboard instanceof Dashboard).toBe(true);
                testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=Injector_test.js.map