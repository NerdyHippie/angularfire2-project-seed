import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../global/_services/authentication.service";

export interface ResetModel {
	email: string
}

@Component({
    moduleId:    module.id,
    selector:    'reset-request',
    templateUrl: 'reset-request.component.html'
})

export class ResetRequestComponent implements OnInit {
		model:ResetModel = {email:''};
	
    constructor(
    	private authenticationService:AuthenticationService,
			private router:Router
		) { }

    ngOnInit() { }
    
    requestReset(model:ResetModel) {
    	console.log('reset password',model);
    	this.authenticationService.requestReset(model.email).then((data:any) => {
    		console.log('reset data',data);
				this.router.navigate(['/login']);
			}).catch((error:any) => console.error('reset error',error));
		}
    
}
