import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import Dashboard from './components/dashboard/dashboard.component';
import GasService from './models/gasService';

bootstrap(Dashboard, [HTTP_PROVIDERS, GasService]);
