import {Component, Output, EventEmitter} from '@angular/core';
import {Account} from "../../models/account/account.interface";
import {AuthService} from "../../providers/auth/auth.service";
import {LoginResponse} from "../../models/login/login-response.interface";


@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  @Output() registerStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(private auth: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result); //upstreaming the result of the register function to the RegisterPage
    }
    catch (e) {
      console.error(e);
      this.registerStatus.emit(e)
    }
  }
}
