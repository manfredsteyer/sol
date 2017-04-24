import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Passenger } from "../entities/passenger";
import { PassengerService } from "../passenger-search/passenger.service";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {

    name: string;
    passengers: Array<Passenger> = [];
    selectedPassenger: Passenger;

    constructor(private passengerService: PassengerService) {
    }

    search(): void {

        this.passengerService
            .find(this.name)
            .subscribe(
                passengers => { this.passengers = passengers; },
                errResponse => { console.error('Fehler beim Laden', errResponse); }
            );

    }

    select(p: Passenger) {
        this.selectedPassenger = p;
    }


}