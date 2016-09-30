import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  words: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, firebase: AngularFire) {
      console.log("hi");
      this.words = firebase.database.list('/words');
      console.log(this.words);
  }

}
