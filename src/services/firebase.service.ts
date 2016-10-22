import { Observable } from 'rxjs/Observable'

import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Word } from '../model/word.model';

@Injectable()
export class FirebaseService {
    
    constructor(private firebase: AngularFire) {

    }

    /*
    Authenticate the user with Firebase
    */
    authenticate(username: string, password: string) {
        return false;
    }

    /*
    Return all words from Firebase words list
    */
    getWords() {
        let words: Observable<Word[]> = this.firebase.database.list('/words');
        return words;
    }

}