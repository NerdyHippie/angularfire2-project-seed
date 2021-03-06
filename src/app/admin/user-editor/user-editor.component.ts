import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../../global/_services/user.service';
import { UtilService } from '../../global/_services/utils.service';
import { User } from '../../global/_models/user.model';

@Component({
  moduleId: module.id,
  selector: 'user-editor',
  templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent extends UserDetailComponent implements OnInit, OnDestroy {
  savedUser: any;
  currentUser: User;
  showLinkOptions: Boolean = false;
  constructor(public userService: UserService, public utils: UtilService, public activatedRoute: ActivatedRoute, public router: Router) {
    super(userService, activatedRoute, router);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.loadUser(params));
    this.userService.currentUser.subscribe((data: any) => this.currentUser = data);
  }
  saveUser() {
    if (!this.user.displayName && (this.user.firstName || this.user.lastName)) {
      this.user.displayName = this.user.firstName.length ? this.user.firstName + ' ' + this.user.lastName : this.user.lastName;
    }
    if (this.user.displayName && !(this.user.firstName || this.user.lastName)) {
      const names = this.user.displayName.split(' ');
      this.user.lastName = names[names.length - 1];
      this.user.firstName = this.user.displayName.replace(' ' + this.user.lastName, '');
    }
    //console.log('this.user', this.user);
    this.user.$key ? this.updateUser() : this.createUser();
  }
  cancelEdit() {
    let path = '/admin/users';
    if (this.user.$key) {
      path += '/' + this.user.$key;
    }
    this.router.navigate([path]);
  }
  createUser() {
    this.savedUser = this.usrSvc.userList$.push(this.user);
    this.savedUser.then(this.openDetail.bind(this));
  }
  updateUser() {
    this.savedUser = {key: this.user.$key};
    this.usrSvc.getUser(this.user.$key).set(this.utils.cleanObj(this.user)).then(this.openDetail.bind(this));
  }
  openDetail() {
    this.router.navigate(['admin/users/' + this.savedUser.key]);
  }
  showLinkButton() {
    let showIt = false;
    if (this.currentUser) {
      // console.log('cu', this.currentUser);
      showIt = (this.currentUser.uid === this.id);
    }
    return showIt;
  }
  toggleLinkOptions() {
    this.showLinkOptions = !this.showLinkOptions;
  }
  archiveUser() {
    // TODO: Archive User
  }
  restoreUser() {
    // TODO: Restore User
  }
  ngOnDestroy() {
    console.log('destroying user-editor');
  }
}
