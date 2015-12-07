import { beforeEachProviders, describe, expect, iit, inject, it, injectAsync, fakeAsync, TestComponentBuilder, tick } from 'angular2/testing';
import { Component, provide} from 'angular2/angular2';
import {MockBackend, BaseRequestOptions, Http, Response } from 'angular2/http';

import GasService from '../../app/models/gas-service';


describe('GasService', () => {

    var connection;
    var httpMock = { useFactory:
        function(backend, defaultOptions) {
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

      debugger;
      var connection;
      backend.connections.subscribe(c => connection = c);
      connection.mockRespond(new Response(<any>'fake response'));

      gasService.getBestPrice().subscribe((res) => {
        debugger;
        expect(res.text()).toBe('awesome');
      });
    }));

});
