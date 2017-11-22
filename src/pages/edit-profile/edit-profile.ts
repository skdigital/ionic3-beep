import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResult(event: Boolean) {
    event ? this.navCtrl.setRoot('TabsPage') : console.log('Not authenticated or saved')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
