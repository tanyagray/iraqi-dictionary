import 'rxjs/add/operator/last';

import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'sign-in-page',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

    private signInRequired: boolean;

    private email:string;
    private password:string;

    private auth;

    constructor(public navCtrl: NavController, private service: FirebaseService) { 

        this.signInRequired = false;

        this.service.authState.subscribe( authEvent => {
            this.auth = authEvent;
            this.redirectIfAuthenticated();
        });

    }

    /*
    Redirects the user inside the app if they are athenticated
    */
    private redirectIfAuthenticated(){
        if( this.auth ) {
            this.navCtrl.setPages([TabsPage]);
        } else {
            this.signInRequired = true;
        }
    }

    /*
    Attempts to sign in the user with the details provided
    */
    public signIn() {
        this.service.authenticate( this.email, this.password );
        
    }

}