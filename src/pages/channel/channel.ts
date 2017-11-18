import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage(
  {
    name: 'ChannelsPage'
  }
)

@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }

}
