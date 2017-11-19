import { Component } from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";

import {Account} from "../../models/account/account.interface";

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

  account = {} as Account;

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private navCtrl: NavController) {
  }

  // Firebase login method
  async login(){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
      this.toast.create({
        message: "Login successful!",
        duration: 3000
      }).present()
    }
    catch(e){
      console.error(e);
    }
  }

  navigateToPage(pageName: string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
