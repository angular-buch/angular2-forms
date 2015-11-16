import {Injector, Injectable} from 'angular2/angular2'

@Injectable()
class Engine {
}

@Injectable()
class Car {
  constructor(public engine:Engine) {}
}

var injector = Injector.resolveAndCreate([Car, Engine]);
var car = injector.get(Car);
