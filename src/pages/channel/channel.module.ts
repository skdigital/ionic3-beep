import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelPage } from "./channel";
 
@NgModule({
  declarations: [
      ChannelPage
    ],
  imports: [
      IonicPageModule.forChild(ChannelPage)
    ],
  exports: [
      ChannelPage
    ]
})

export class ChannelPageModule{}