import { User } from 'firebase/app';
import { Component } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if (this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.authenticatedUser$.unsubscribe();
  }

}
