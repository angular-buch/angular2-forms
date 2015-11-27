var testing_1 = require('angular2/testing');
var http_1 = require('angular2/http');
var dashboard_component_1 = require('../../app/components/dashboard-component');
var gas_service_1 = require('../../app/models/gas-service');
testing_1.describe('dashboard component', function () {
    testing_1.beforeEachProviders(function () { return [dashboard_component_1.default, gas_service_1.default, http_1.HTTP_PROVIDERS]; });
    testing_1.it('should have a predefined list of cars', testing_1.inject([dashboard_component_1.default], function (dashboard) {
        testing_1.expect(dashboard.cars.length).toBe(2);
    }));
});
//# sourceMappingURL=dashboard-component_test.js.map