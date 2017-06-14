import {Http, Headers, URLSearchParams} from '@angular/http';
import {Passenger} from '../entities/passenger';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PassengerService {

  constructor(private http: Http) {
  }

  find(name: string): Observable<Passenger[]> {

      let url = 'http://www.angular.at/api/passenger';

      let headers = new Headers();
      headers.set('Accept', 'application/json');

      let search = new URLSearchParams();
      search.set('name', name);

      return this.http
          .get(url, { headers, search})
          .map(resp => resp.json());


  }

  findById(id: string): Observable<Passenger> {

    let url = 'http://www.angular.at/api/passenger';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('id', id);

    return this.http
      .get(url, { headers, search})
      .map(resp => resp.json());
  }

  save(passenger: Passenger): Observable<Passenger> {

    let url = 'http://www.angular.at/api/passenger';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this.http
      .post(url, passenger, { headers })
      .map(resp => resp.json());
  }

}
