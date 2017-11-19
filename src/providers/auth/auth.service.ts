import {Injectable} from '@angular/core';
import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";
import {AngularFireAuth} from "angularfire2/auth";


@Injectable()
export class AuthService {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth) {
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await
          this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

  async SignInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await
        this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
    }
    }
    catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }
}
