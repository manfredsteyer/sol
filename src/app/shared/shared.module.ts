

import { NgModule } from '@angular/core';
import { StatusPipe } from "./pipes/status.pipe";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [CommonModule],
    declarations: [StatusPipe],
    providers: [],
    exports: [StatusPipe],

})
export class SharedModule { }
