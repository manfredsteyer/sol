

import { NgModule } from '@angular/core';
import { StatusPipe } from "./pipes/status.pipe";
import { CommonModule } from "@angular/common";
import { NameValidationDirective } from "./validation/name-validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPipe,
        NameValidationDirective
    ],
    providers: [],
    exports: [
        StatusPipe,
        NameValidationDirective
    ]
})
export class SharedModule { }
