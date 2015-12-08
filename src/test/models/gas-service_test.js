var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
var mock_backend_1 = require('angular2/src/http/backends/mock_backend');
var http_1 = require('angular2/http');
var gas_service_1 = require('../../app/models/gas-service');
testing_1.describe('GasService', function () {
    var connection;
    var httpMock = { useFactory: function (backend, defaultOptions) {
            return new http_1.Http(backend, defaultOptions);
        },
        deps: [mock_backend_1.MockBackend, http_1.BaseRequestOptions] };
    testing_1.beforeEachProviders(function () { return [
        http_1.BaseRequestOptions, mock_backend_1.MockBackend,
        angular2_1.provide(http_1.Http, httpMock),
        gas_service_1.default
    ]; });
    testing_1.it('should pick up the first price', testing_1.inject([gas_service_1.default, mock_backend_1.MockBackend], function (gasService, backend) {
        var fakeResponse = JSON.stringify({ stations: [{ price: 42 }, { price: 4 }] });
        backend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: fakeResponse })));
        });
        gasService.getBestPrice().subscribe(function (price) {
            testing_1.expect(price).toBe(42);
        });
    }));
});
//# sourceMappingURL=gas-service_test.js.map