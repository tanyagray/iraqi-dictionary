import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable'

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

import { Word } from '../../model/word.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    private searchValue: string = '';
    private allWords: Observable<Word[]>;
    private visibleWords: Observable<Word[]>;
  
    constructor(public navCtrl: NavController, private firebase: AngularFire) {
        this.allWords = firebase.database.list('/words');
        this.visibleWords = this.allWords;
    }

    showWordDetail(event: any) {
        console.log(event);
    }
  
    search(event: any) {
        this.searchValue = event.target.value.trim();
        
        this.visibleWords = this.allWords
            .map( words => {
                return words.filter(this.searchFilter, this);
            });
    }
	
	searchFilter( word: any, index: number ) {
        
        if( this.searchValue.length == 0 ) return true;

		let keep: boolean = this.enMatch(word, this.searchValue) || this.iqMatch(word, this.searchValue);
		return keep;

	}
	
	enMatch( word: Word, searchString: string ) {
        let found: boolean = ( word.en.indexOf(searchString) != -1 );
        return found;
	}
	
	iqMatch( word: Word, searchString: string ) {
        let found: boolean = ( word.iq.indexOf(searchString) != -1 );
        return found;
	}
	

}
