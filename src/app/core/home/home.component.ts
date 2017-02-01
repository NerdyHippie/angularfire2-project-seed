import { Component, OnInit } from '@angular/core';
import { UserService } from '../../global/_services/index'
import {User} from "../../global/_models/user.model";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
		,styleUrls: ['home.component.less']
})
export class HomeComponent implements OnInit {
		currentUser$: any;
		currentUser: User = {email:''};
    constructor(private userService:UserService) { }
		
    ngOnInit() {
    	//this.currentUser$ = this.;
    	this.userService.currentUser.subscribe((data:any) => {
    		this.currentUser = data;
			});
		}
		
    
    
    
}
