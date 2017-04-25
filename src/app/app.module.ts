import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";
import { PassengerService } from "./passenger-search/passenger.service";
import { FlightBookingModule } from "./passenger-search/flight-booking.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    PassengerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
