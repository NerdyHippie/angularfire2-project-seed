import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AlertComponent,LoadingMessageComponent } from './_directives/index';
import { FilterByIdPipe } from "./_pipes/filter-by-id.pipe";

export const globalComponents: Array<any> = [AlertComponent,LoadingMessageComponent];

@NgModule({
    imports:      [ CommonModule,FormsModule ],
    declarations: [
    	globalComponents
	    ,FilterByIdPipe
    ],
    exports:      [
        CommonModule, FormsModule, globalComponents,FilterByIdPipe ]
})
export class GlobalModule {
    constructor() {

    }
}
