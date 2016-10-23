import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private service: FirebaseService) {

  }

  private signOut() {
    this.service.unauthenticate();
    this.navCtrl.setPages([SignInPage]);
  }

}
