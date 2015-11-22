import {it, describe, expect} from 'angular2/testing';
import {Inject, Injector, Injectable} from 'angular2/angular2'

class GasService {
}

class Dashboard {
  gasService;

  constructor(@Inject(GasService) gasService) {

    this.gasService = gasService;
    console.log('Dependency:', gasService)
  }
}

describe("Injector (ES6 syntax)", () => {
  it("should be able to resolve and inject dependencies", () => {

    var injector = Injector.resolveAndCreate([
      Dashboard,
      GasService]
    );
    var dashboard = injector.get(Dashboard);

    expect(dashboard instanceof Dashboard).toBe(true);
    expect(dashboard.gasService instanceof GasService).toBe(true);
  });
});
