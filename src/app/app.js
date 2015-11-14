var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var gasService_1 = require('./models/gasService');
angular2_1.bootstrap(dashboard_component_1.default, [http_1.HTTP_PROVIDERS, gasService_1.default]);
//# sourceMappingURL=app.js.map