var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var gas_service_1 = require('../../app/models/gas-service');
testing_1.describe('GasService', function () {
    testing_1.beforeEachProviders(function () { return [
        http_1.BaseRequestOptions, http_1.MockBackend,
        angular2_1.provide(http_1.Http, {
            useFactory: function (backend, defaultOptions) { return new http_1.Http(backend, defaultOptions); },
            deps: [http_1.MockBackend, http_1.BaseRequestOptions]
        }),
        gas_service_1.default
    ]; });
    testing_1.it('should pick up the first price', testing_1.inject([gas_service_1.default, http_1.MockBackend], function (gasService, backend) {
        backend.connections.subscribe(function (c) {
            c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '{ "stations": [{ "price": 42 }, { "price": 4 }] }' })));
        });
        gasService.getBestPrice().subscribe(function (price) {
            testing_1.expect(price).toBe(42);
        });
    }));
});
//# sourceMappingURL=gas-service_test.js.map