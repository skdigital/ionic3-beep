import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicApp } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
