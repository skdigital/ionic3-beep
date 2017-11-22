import { Component } from '@angular/core';
import {NavController, NavParams, IonicPage, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams){
  }


  register(event: LoginResponse){
    console.log(event);
    if(!event.error) {
      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 3000
      }).present()
    }
    else {
      this.toast.create({
        message: `Account not created. ${event.error.message}`
      }).present()
    }
  }
}
