import {it, describe, expect} from 'angular2/testing';
import {Injector, Injectable, provide} from 'angular2/core'

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
    it("should map a STRING token to a configuration object [useClass]", () => {

      var injector = Injector.resolveAndCreate([
        provide('DASHBOARD', {useClass: Dashboard}),
        provide(GasService, {useClass: GasService}),
      ]);

      var dashboard = injector.get('DASHBOARD');

      expect(dashboard instanceof Dashboard).toBe(true);
      expect(dashboard.gasService instanceof GasService).toBe(true);
    });

    describe("configuration object", () => {

        it("should have a recipe for providing values [useValue]", () => {

          var injector = Injector.resolveAndCreate([
            provide('TEST', {useValue: 'Hello Angular2'})
          ]);

          var test = injector.get('TEST');
          expect(test).toBe('Hello Angular2');
        });

        it("should have a recipe for providing aliases [useExisting]", () => {

          class DashboardAlias {};

          var injector = Injector.resolveAndCreate([
            provide(Dashboard, {useClass: Dashboard}),
            provide(GasService, {useClass: GasService}),
            provide(DashboardAlias, {useExisting: Dashboard}),
          ]);

          var dashboard = injector.get(DashboardAlias);

          expect(dashboard instanceof Dashboard).toBe(true);
          expect(dashboard.gasService instanceof GasService).toBe(true);
        });

        it("should have a recipe for providing factories [useFactory]", () => {

          //  a factory can have own dependencies, too
          var factory = (gasService: GasService) => {
              return new Dashboard(gasService);
          };

          var injector = Injector.resolveAndCreate([
              provide(GasService, {useClass: GasService}),
              provide(Dashboard, { useFactory: factory, deps: [GasService]})
          ]);

          var dashboard = injector.get(Dashboard);

          expect(dashboard instanceof Dashboard).toBe(true);
          expect(dashboard.gasService instanceof GasService).toBe(true);
        });

        it("proof: factories also serve singletons", () => {

          @Injectable()
          class TestObject {
            constructor(public testId: number) {
            }
          }

          var idCounter = 0;
          var factory = () => {
              return new TestObject(++idCounter);
          };

          var injector = Injector.resolveAndCreate([
              provide(TestObject, { useFactory: factory })
          ]);

          var test1 = injector.get(TestObject);
          expect(test1.testId).toBe(1);

          // cached instance will be used
          var test2 = injector.get(TestObject);
          expect(test2.testId).toBe(1);

          // according to docs, this does not get cached
          var test3 = injector.resolveAndInstantiate(provide(TestObject, { useFactory: factory }))
          expect(test3.testId).toBe(2);
        });

    });



  });
});
