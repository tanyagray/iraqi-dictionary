import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
export declare class HomePage {
    navCtrl: NavController;
    words: FirebaseListObservable<any>;
    constructor(navCtrl: NavController, firebase: AngularFire);
}
