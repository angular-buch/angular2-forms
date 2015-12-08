import { beforeEachProviders, describe, expect, iit, inject, it, injectAsync, fakeAsync, TestComponentBuilder, tick } from 'angular2/testing';
import { Component, provide} from 'angular2/angular2';
//import {MockBackend, BaseRequestOptions, Http, Response } from 'angular2/http';

import {MockBackend, MockConnection} from 'angular2/src/http/backends/mock_backend';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Request,
    RequestOptions,
  Response,
  ResponseOptions,
  URLSearchParams,
  JSONP_PROVIDERS,
  HTTP_PROVIDERS,
  XHRBackend,
  JSONPBackend,
  Http,
  Jsonp
} from 'angular2/http';

import GasService from '../../app/models/gas-service';


describe('GasService', () => {

    var connection;
    var httpMock = { useFactory:
        function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]};

    beforeEachProviders(() => [
        BaseRequestOptions, MockBackend,
        provide(Http, httpMock),
        GasService
    ]);

    // this is an async test!
    it('should pick up the first price', inject([GasService, MockBackend], (gasService, backend) => {

      var fakeResponse = JSON.stringify({ stations: [{ price: 42 }, { price: 4 }] });

      backend.connections.subscribe(connection => {
         connection.mockRespond(new Response(new ResponseOptions({body: fakeResponse})));
       });

      gasService.getBestPrice().subscribe((price) => {
        expect(price).toBe(42);
      });
    }));
});
