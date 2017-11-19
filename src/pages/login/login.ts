import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage, IonicApp, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }

  login(event: LoginResponse) {
    console.log(event); //check event object
    if(!event.error){
      this.navCtrl.setRoot('ProfilePage');
      this.toast.create({
        message: `Welcome to OPSAP, ${event.result.email}`,
        duration: 3000
      }).present()
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present()
    }
  }
}
