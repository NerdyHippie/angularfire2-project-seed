import {Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireObject, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { User } from '../../global/_models/user.model';
import { UserService } from '../../global/_services/user.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: String;
  user$: AngularFireObject<User>;
  constructor(public usrSvc: UserService, public activatedRoute: ActivatedRoute, public router: Router) {	}
  ngOnInit() {
    // Pass the routeParams data over to loadUser()
    this.activatedRoute.params.subscribe(params => this.loadUser(params));
  }
  loadUser(params: any) {
    // console.log('loadUser', params);
    this.user = undefined; // Start out setting this.user to undefined so that the directive content disappears

    if (params['id'] && params['id'] !== 'create') {
      // Add the && != 'create" to catch just in case this is picked up with a activatedRoute param of 'create'
      this.id = params['id'];
      this.user$ = this.usrSvc.getUser(this.id);  // Get the FirebaseObjectObservable reference here
      this.user$.snapshotChanges().subscribe(data => {
        const $key = data.key;
        const usrData = data.payload.val();
        this.user = { $key, ...usrData };
      });
    } else {
      // TODO: Figure out the proper way to do this - I think you're suppose to implement a Class that implements the Interface
      this.user = {firstName: '', lastName: '', email: ''}; // Make a new user
    }
  }
  editUser() {
    this.router.navigate(['../edit/' + this.user.$key], {relativeTo: this.activatedRoute});
  }
  popUser(usrData: any) {
    this.user = usrData;
  }
  allowEdit() {
    let canEdit = false;
    if (1 === 1) {  // TODO: Switch this to use if (isAdmin or uid = currentUser.uid)
      canEdit = true;
    }
    return canEdit;
  }
}
