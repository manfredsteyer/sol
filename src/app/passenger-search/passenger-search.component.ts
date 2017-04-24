import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Passenger } from "../entities/passenger";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {

    name: string;
    passengers: Array<Passenger> = [];
    selectedPassenger: Passenger;
    message: string;
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

    save(): void {

        let url = 'http://www.angular.at/api/passenger';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        this.http
            .post(url, this.selectedPassenger, { headers })
            .map(resp => resp.json())
            .subscribe(
                passenger => { 
                    this.selectedPassenger = passenger; 
                    this.message = "Erfolgreich gespeichert!";
                },
                errResponse => { 
                    console.error('Fehler beim Laden', errResponse); 
                    this.message = "Fehler beim Speichern: " + errResponse.text();
                }
            );

    }


}