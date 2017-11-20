import { IonicErrorHandler } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataService{

  user = {} as User;
  profile = {} as Profile;

  profileObject: AngularFireObject<Profile>

  constructor(private database: AngularFireDatabase) {

  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`)

    try {
       await this.profileObject.set(profile);
       return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }
  }
}

