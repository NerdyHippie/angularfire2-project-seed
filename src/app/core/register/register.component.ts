import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserService, AlertService } from '../../global/_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(private router: Router,
                private afAuth: AngularFireAuth,
                private alertService: AlertService,
                private usrSvc: UserService) {
    }
  register(f: any) {
    console.log('firing register',f);
    if (f.valid) {
      console.log('form is valid');
      this.loading = true;
      const regData = {
        email: this.model.email,
        password: this.model.password
      };
      this.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
        .then(this.registerSuccess.bind(this), this.registerFailure.bind(this));
    } else {
      console.log('not valid');
    }
  }
  private registerSuccess(data: any) {
    console.log('firebase reg success!', data);
    data.auth.firstName = this.model.firstName;
    data.auth.lastName = this.model.lastName;
    this.usrSvc.setUserAccount(data).then(() => {
      console.log('acct created, reg finished');
      this.alertService.success('Registration successful',true);
      this.router.navigate(['/']);
    });
  }
  private registerFailure(error: any) {
    console.error('Warning: Registration Failed',error);
    this.alertService.error(error);
    this.loading = false;
  }
}
