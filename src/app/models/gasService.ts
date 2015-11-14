import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, URLSearchParams } from 'angular2/http';
import Station from './Station';

// ****
// duplicate type 'Observable', see http://stackoverflow.com/a/33334863
// wrong: import {Observable } from 'angular2/core';
// right: import Observable from '@reactivex/rxjs/dist/cjs/Observable';
// for now we fall back to 'any'
// ****

// enforce TypeScript to emit the needed metadata,
// see http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
@Injectable()
export default class GasService {

  apiUrl: string = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=52.52099975265203&lng=13.43803882598877&rad=4&sort=price&type=diesel';
  apiKey: string = '&apikey=acc6ad94-2b49-9190-5fcf-94d683f66887';
  apiUrlAndKey: string;

  constructor(private http: Http) {
    this.apiUrlAndKey = this.apiUrl + this.apiKey
  }

  getBestPrice() {
    return this.http.get(this.apiUrlAndKey)
      .map(result => result.json().stations)
      .map((stations: Array<Station>): number =>
        stations[0].price
      )
  }
}
