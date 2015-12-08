import { beforeEachProviders, describe, expect, inject, it } from 'angular2/testing';
import { provide } from 'angular2/angular2';
import { MockBackend, BaseRequestOptions, Http, Response, ResponseOptions } from 'angular2/http';
import GasService from '../../app/models/gas-service';

describe('GasService', () => {

  beforeEachProviders(() => [
      BaseRequestOptions, MockBackend,
      provide(Http, {
          useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
      }),
      GasService
  ]);

  it('should pick up the first price', inject([GasService, MockBackend], (gasService, backend) => {

    backend.connections.subscribe(c => {
       c.mockRespond(new Response(
         new ResponseOptions({body: '{ "stations": [{ "price": 42 }, { "price": 4 }] }'})));
     });

    gasService.getBestPrice().subscribe((price) => {
      expect(price).toBe(42);
    });
  }));
});
