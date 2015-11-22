import {it, describe, expect} from 'angular2/testing';
import {Injector, Injectable, provide} from 'angular2/angular2'

class GasService {
}

@Injectable()
class Dashboard {
  constructor(public gasService: GasService) {
    //console.log('Dependency:', gasService)
  }
}

describe("Injector", () => {
  it("should be able to resolve and inject dependencies (shorthand syntax)", () => {

    // shorthand syntax for: token to class
    var injector = Injector.resolveAndCreate([
      Dashboard,
      GasService]
    );

    var dashboard = injector.get(Dashboard);

    expect(dashboard instanceof Dashboard).toBe(true);
    expect(dashboard.gasService instanceof GasService).toBe(true);
  });

  describe("provide", () => {

    // full syntax for: token to class
    it("should map a TYPE token to a configuration object", () => {

      var injector = Injector.resolveAndCreate([
        provide(Dashboard, {useClass: Dashboard}),
        provide(GasService, {useClass: GasService}),
      ]);

      var dashboard = injector.get(Dashboard);

      expect(dashboard instanceof Dashboard).toBe(true);
      expect(dashboard.gasService instanceof GasService).toBe(true);
    });

    // full syntax for: token to class
    it("should map a STRING token to a configuration object", () => {

      var injector = Injector.resolveAndCreate([
        provide('DASHBOARD', {useClass: Dashboard}),
        provide(GasService, {useClass: GasService}),
      ]);

      var dashboard = injector.get('DASHBOARD');

      expect(dashboard instanceof Dashboard).toBe(true);
      expect(dashboard.gasService instanceof GasService).toBe(true);
    });


  });
});
