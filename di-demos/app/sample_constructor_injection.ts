import {Injector, Injectable} from 'angular2/angular2'

class GasService {
}

@Injectable()
class Dashboard {
  constructor(gasService: GasService) {
    console.log('Dependency:', gasService)
  }
}

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
