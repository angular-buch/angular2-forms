import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import Dashboard from './components/dashboard-component';
import GasService from './models/gas-service';

bootstrap(Dashboard, [HTTP_PROVIDERS, GasService]);
