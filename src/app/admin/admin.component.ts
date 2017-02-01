import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    //template: `<router-outlet></router-outlet>`
		templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {
		routeInfo: Array<{}>;
		
    constructor() {}

    ngOnInit() {
    	this.routeInfo = [{
    		name: 'Manage Users'
				,path: '/admin/users'
			},{
    		name: 'Manage Jobs'
				,path: '/admin/jobs'
			}];
	
		}
    
}
