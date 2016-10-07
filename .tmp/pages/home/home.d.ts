import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
export declare class HomePage {
    navCtrl: NavController;
    private firebase;
    words: Observable<any>;
    searchValue: Subject<String>;
    constructor(navCtrl: NavController, firebase: AngularFire);
    search(event: any): void;
    searchFilter(value: any[], index: number): any;
}
