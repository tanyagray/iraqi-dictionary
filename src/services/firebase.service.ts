import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Word } from '../model/word.model';

@Injectable()
export class FirebaseService {
    
    public authState:Subject<any>;

    /*private authErrorCodes = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/user-not-found": "No user found with that email address."
    }*/

    constructor(private firebase: AngularFire) {

        this.authState = new Subject<any>();

        this.firebase.auth.subscribe( auth => {
            this.authState.next(auth);
        });

    }

    /*
    Authenticate the user with Firebase.
    Returns the authenticated user.
    */
    public authenticate(email: string, password: string) {

        let credentials = { email, password };

        this.firebase.auth.login( credentials )
            .catch((error) => {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
    }

    /*
    Unauthenticate the current user
    */
    unauthenticate() {
        this.firebase.auth.logout();
    }

    /*
    Return all words from Firebase words list
    */
    getWords() {
        let words: Observable<Word[]> = this.firebase.database.list('/words');

        words = words.map( words => {
            return words.map( word => {
                return new Word(word);
            })
        });

        return words;
    }

}