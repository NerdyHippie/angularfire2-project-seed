import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../_services/index';

@Component({
    moduleId:    module.id,
    selector:    'alert',
    templateUrl: 'alert.component.html'
	,styleUrls: ['alert.component.less']
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
    
    clearAlert() {
    	this.alertService.clearMessage();
		}
}
