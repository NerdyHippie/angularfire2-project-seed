import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../global/_services/alert.service";
import { UserService } from '../../global/_services/user.service';
import { User } from '../../global/_models/user.model';

import * as firebase from 'firebase';

@Component({
    moduleId:    module.id,
    selector:    'link-account',
    templateUrl: 'link-account.component.html'
})
export class LinkAccountComponent implements OnInit {
		currentUser:User;
		selectedProviders: Array<String> = [];
		linkToProvider:any;
		
    constructor(private userService:UserService,private alertService:AlertService) { }

    ngOnInit() {
			this.userService.currentUser.subscribe((data:any) => {
				this.currentUser = data;
				this.selectedProviders.push(data.providerId);
			});
		}
		
		isConnected(provider:string) {
    	return this.currentUser.providers[provider];
    	//return this.selectedProviders.indexOf(provider) != -1;
		}
		
		connectToPassword() {
				alert('not yet implented');
		}
		connectToGoogle() {
			this.linkToProvider = new firebase.auth.GoogleAuthProvider();
			this.linkAccount();
		}
		connectToFacebook() {
			this.linkToProvider = new firebase.auth.FacebookAuthProvider();
			this.linkAccount();
		}
		connectToTwitter() {
			this.linkToProvider = new firebase.auth.TwitterAuthProvider();
			this.linkAccount();
		}
		connectToGithub() {
			this.linkToProvider = new firebase.auth.GithubAuthProvider();
			this.linkAccount();
		}
		
		linkAccount() {
			firebase.auth().currentUser.linkWithPopup(this.linkToProvider)
				.then((result:any) => firebase.auth().signInWithCredential(result.credential))
				.catch((error:any) => this.alertService.error(error));
		}
    
}
