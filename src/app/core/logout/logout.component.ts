import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../global/_services/index';

@Component({
	template:'Logging out...'
})
export class LogoutComponent {
		returnUrl: String;
		
    constructor(private route: ActivatedRoute,
								private router: Router,
								private authenticationService: AuthenticationService) { }

    ngOnInit() {
			this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
			this.authenticationService.logout().subscribe(auth => {if (!auth) this.router.navigate([this.returnUrl])});
    }
    
}
