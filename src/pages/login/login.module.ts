import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from "./login";
import {ComponentsModule} from "../../components/components.module";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
      LoginPage
    ],
  imports: [
      IonicPageModule.forChild(LoginPage),
      ComponentsModule,
      AngularFireAuthModule
    ],
  exports: [
      LoginPage
    ]
})

export class LoginPageModule{}
