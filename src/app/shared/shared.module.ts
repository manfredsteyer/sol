

import { NgModule } from '@angular/core';
import { StatusPipe } from "./pipes/status.pipe";
import { CommonModule } from "@angular/common";
import { NameValidationDirective } from "./validation/name-validation.directive";
import { PublicPeopleValidationDirective } from "app/shared/validation/public-people-validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPipe,
        NameValidationDirective,
        PublicPeopleValidationDirective
    ],
    providers: [],
    exports: [
        StatusPipe,
        NameValidationDirective,
        PublicPeopleValidationDirective
    ]
})
export class SharedModule { }
