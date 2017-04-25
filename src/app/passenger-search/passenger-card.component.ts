import {Passenger} from '../entities/passenger';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'passenger-card',
    templateUrl: './passenger-card.component.html'
})
export class PassengerCardComponent {
    @Input() item: Passenger;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() { }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

}