import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Passenger } from "../entities/passenger";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {

    name: string;
    firstName: string;
    passengers: Array<Passenger> = [];
    selectedPassenger: Passenger;
    
    // private http: Http;

    constructor(private http: Http) {
        // this.http = http;
    }

    search(): void {

        let url = 'http://www.angular.at/api/passenger';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('name', this.name);
        search.set('firstName', this.firstName);

        this.http
            .get(url, { headers, search})
            .map(resp => resp.json())
            .subscribe(
                passengers => { this.passengers = passengers; },
                errResponse => { console.error('Fehler beim Laden', errResponse); }
            );

    }

    select(p: Passenger) {
        this.selectedPassenger = p;
    }

}