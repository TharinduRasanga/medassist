import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MedAuthService {
  constructor(private auth: Auth) {
  }

  login(loginData: any) {
    return signInWithEmailAndPassword(this.auth, loginData.email, loginData.password);
  }

  register(loginData: any) {
    return createUserWithEmailAndPassword(this.auth, loginData.email, loginData.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
