import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-chat',
  templateUrl: 'user-chat.html',
})
export class UserChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChatPage');
  }

}
