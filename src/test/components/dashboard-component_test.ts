import { iit, it, ddescribe, describe, expect, inject, beforeEachProviders, } from 'angular2/testing';
import { provide } from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import DashboardComponent from '../../app/components/dashboard-component';
import GasService from '../../app/models/gas-service';

describe('dashboard component', () => {
  beforeEachProviders(() => [DashboardComponent, GasService, HTTP_PROVIDERS]);

    it('should have a predefined list of cars', inject([DashboardComponent], (dashboard: DashboardComponent) => {
      expect(dashboard.cars.length).toBe(2);
    }));
});
