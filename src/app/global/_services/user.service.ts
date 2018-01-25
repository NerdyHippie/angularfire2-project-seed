import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Logger } from './logger.service';
import { User } from '../_models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

export interface NewUserData {
  uid?: String;
  firstName?: String;
  lastName?: String;
  email: String;
  photoURL?: String;
  displayName?: String;
  dateCreated?: String;
}

@Injectable()

export class UserService {
  userList$: AngularFireList<any>;
  currentUser: ReplaySubject<any> = new ReplaySubject(1);
  constructor(private afData: AngularFireDatabase, private logger: Logger, private authSvc: AngularFireAuth) {
    this.initialize();
  }
  private initialize(): void {
    this.userList$ = this.afData.list('/users');
  }
  getUser(userId: String): any {
    const path = '/users/' + userId;
    return this.afData.object(path);
  }
  loadCurrentUser(authData: any) {
    this.getUser(authData.uid).valueChanges().subscribe((usrData: any) => {
      this.logger.log('set currentUser', usrData);
      this.currentUser.next(usrData);
    });
    return this.currentUser;
  }
  makeProviderObj(providerData: Array<any>) {
    const ret = {};
    for (const item of providerData) {
      ret[item.providerId.replace('.com', '')] = item.uid;
    }
    this.logger.log('makeProviderObj', ret);
    return ret;
  }
  setUserAccount(authData: any) {
    this.logger.log('set account', authData);
    const providerData = authData.providerData; // [0];
    const userData: any = {
      uid: authData.uid,
      email: authData.email,
      // ,providerId: providerData.providerId
      lastLogin: moment().format(),
      // ,providerUid: providerData.uid
      providers: this.makeProviderObj(providerData),
      photoURL: authData.photoURL || 'http://simpleicon.com/wp-content/uploads/user1.png',
      displayName: authData.displayName
    };
    /* Ended up not needing this, but it's handy to know...
     let providerMap:any = {
     '2': 'facebook'
     ,'3': 'google'
     ,'4': 'firebase'
     };*/
    if (authData.firstName) { userData.firstName = authData.firstName; }
    if (authData.lastName) { userData.lastName = authData.lastName; }
    const usr = this.getUser(userData.uid);
    const usr$ = usr.valueChanges().subscribe((user: any) => {

      if (!user || !user.dateCreated) {
        this.logger.log('add dateCreated', moment().format());
        userData.dateCreated = moment().format();
        usr.set(userData);
      } else {
        usr.update(userData);
      }

      usr$.unsubscribe();
    });
    return usr;
  }
}
