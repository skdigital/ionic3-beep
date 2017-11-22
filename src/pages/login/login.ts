import {Component, OnDestroy} from '@angular/core';
import {NavController, NavParams, IonicPage, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";
import {DataService} from "../../providers/data/data.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnDestroy{

  private profile$: Subscription;

  constructor(private data: DataService,
              private toast: ToastController,
              private navCtrl: NavController,
              private navParams: NavParams) {
  }

  login(event: LoginResponse) {
    console.log(event); //check event object
    if (!event.error) {
      this.toast.create({
        message: `Welcome to OPSAP, ${event.result.email}`,
        duration: 3000
      }).present();

      this.profile$ = this.data.getProfile(<User>event.result)
        .snapshotChanges()
        .subscribe(res => {
          console.log(res.payload.val());
          res.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage')
        });
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present()
    }
  }

  ngOnDestroy() {
    this.profile$.unsubscribe();
  }

}
