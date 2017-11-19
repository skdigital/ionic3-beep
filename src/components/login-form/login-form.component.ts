import { Component, EventEmitter, Output } from '@angular/core';
import {NavController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";

import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(
    private afAuth: AngularFireAuth,
    private navCtrl: NavController)
  {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  // Firebase login functions
  async login(){
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      };
      //loginStatus eventEmitter Output to LoginPage
      this.loginStatus.emit(result);
    }
    catch(e){
      const error: LoginResponse = {
        error: e
      };
      this.loginStatus.emit(error);
    }
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
  // navigateToPage(pageName: string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

}
