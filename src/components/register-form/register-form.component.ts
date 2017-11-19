import { Component } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../../models/account/account.interface";
import {ToastController} from "ionic-angular";

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController) {
  }

  async register() {
    try {
      const result = await
        this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
        this.toast.create({
          message: "Account successfully created",
          duration: 3000
      }).present()
    }
    catch (e) {
     console.error(e);
     this.toast.create({
       message: e.message,
       duration: 3000
     }).present()
    }
  }

}
