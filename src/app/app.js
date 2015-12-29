"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var dashboard_component_1 = require('./components/dashboard-component');
var gas_service_1 = require('./models/gas-service');
browser_1.bootstrap(dashboard_component_1.default, [http_1.HTTP_PROVIDERS, gas_service_1.default]);
//# sourceMappingURL=app.js.map