import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import Station from './Station';
import 'rxjs/add/operator/map';

@Injectable()
export default class GasService {

  apiUrl: string = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=49.41&lng=8.7&rad=4&sort=price&type=diesel';

  // request an own API Key here: https://creativecommons.tankerkoenig.de/
  // please play fair and register so that this key won't be disabled
  // many thanks to Tankerkönig.de for the free service!
  apiKey: string = '&apikey=acc6ad94-2b49-9190-5fcf-94d683f66887';

  apiUrlAndKey: string;

  constructor(private http: Http) {
    this.apiUrlAndKey = this.apiUrl + this.apiKey
  }

  getBestPrice() {
    return this.http.get(this.apiUrlAndKey)
      .map(result => (<any>result).json().stations)
      .map((stations: Array<Station>): number =>
        stations[0].price
      );
  }
}
