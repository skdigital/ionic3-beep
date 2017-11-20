import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from "./edit-profile";
 
@NgModule({
  declarations: [
      EditProfilePage   
    ],
  imports: [
      IonicPageModule.forChild(EditProfilePage),
      ComponentsModule
    ],
  exports: [
      EditProfilePage
    ]
})

export class EditProfilePageModule{}