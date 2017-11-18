import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelsPage } from "./channel";

@NgModule({
  declarations: [
      ChannelsPage
    ],
  imports: [
      IonicPageModule.forChild(ChannelsPage)
    ],
  exports: [
      ChannelsPage
    ]
})

export class ChannelsPageModule{}
