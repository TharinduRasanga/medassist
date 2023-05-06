import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MedAuthService {
  constructor(
    public afs: AngularFirestore,private auth: AngularFireAuth) {
  }

  login(loginData: any) {
    return this.auth.signInWithEmailAndPassword(loginData.email, loginData.password);
  }

  register(loginData: any) {
    return this.auth.createUserWithEmailAndPassword(loginData.email, loginData.password);
  }

  logout() {
    return this.auth.signOut();
  }
}
