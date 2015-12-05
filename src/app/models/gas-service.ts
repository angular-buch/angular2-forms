import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import Station from './Station';

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
      .map(result => (<any>result).json().stations)
      .map((stations: Array<Station>): number =>
        stations[0].price
      )
  }
}
