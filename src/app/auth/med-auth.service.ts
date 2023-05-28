import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MedAuthService {
  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth) {
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

  addNewUser(additionalFormData: any) {
    this.db.collection('User').doc(additionalFormData.id).set(
      {
        firstName: additionalFormData.firstName,
        lastName: additionalFormData.lastName,
        mobileNumber: additionalFormData.mobileNumber,
        mail: additionalFormData.mail
      }
    );
  }

  updateUser(_id: any, additionalFormData: any) {
    this.db.doc(`User/${_id}`).update(additionalFormData);
  }

  deleteUser(_id:any) {
    this.db.doc(`User/${_id}`).delete();
  }
}
