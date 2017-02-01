import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
    moduleId:    module.id,
    selector:    'loading-message',
    templateUrl: 'loading-message.component.html'
})
export class LoadingMessageComponent implements OnInit,OnChanges,OnDestroy {
    constructor() { }
    
    @Input() waitFor: Observable<any>;
		@Input() message: Observable<string>;
    
    showLoadMessage: Boolean = false;

    ngOnInit() { }
		ngOnChanges(changes:SimpleChanges) {
			this.showLoadMessage = changes['waitFor'].currentValue;
		}
    ngOnDestroy() { }
}
