import {it, describe, expect} from 'angular2/testing';
import {Inject, Injector, Injectable} from 'angular2/angular2'

class GasService {
}

@Injectable()
class Dashboard {
  constructor(public gasService: GasService) {
    console.log('Dependency:', gasService)
  }
}

describe("Injector", () => {
  it("should be able to resolve and inject dependencies", () => {

    var injector = Injector.resolveAndCreate([
      Dashboard,
      GasService]
    );

    // shorthand syntax for: token to class
    /*
    var injector = Injector.resolveAndCreate([
      provide(Dashboard, {useClass: Dashboard}),
      provide(GasService, {useClass: GasService}),
    ]);
    */

    var dashboard = injector.get(Dashboard);

    expect(dashboard instanceof Dashboard).toBe(true);
    expect(dashboard.gasService instanceof GasService).toBe(true);
  });
});
