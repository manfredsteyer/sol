import {PassengerSearchComponent} from './passenger-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule
    ],
    declarations: [
        PassengerSearchComponent
    ],
    providers: [],
    exports: [
        PassengerSearchComponent
    ]

})
export class FlightBookingModule { }
