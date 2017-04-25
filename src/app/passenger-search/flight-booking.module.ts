import {PassengerSearchComponent} from './passenger-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PassengerCardComponent } from "./passenger-card.component";

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule
    ],
    declarations: [
        PassengerSearchComponent,
        PassengerCardComponent
    ],
    providers: [],
    exports: [
        PassengerSearchComponent
    ]

})
export class FlightBookingModule { }
