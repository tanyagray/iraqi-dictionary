import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable'

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Word } from '../../model/word.model';
import { FirebaseService } from '../../services/firebase.service';
import { AddWordPage } from '../add-word/add-word';

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
    
    private searchValue: string = '';
    private words: Observable<Word[]>;
    
    /*
    Dictionary Page
    */
    constructor(public navCtrl: NavController, private service: FirebaseService) {
        this.words = service.getWords();
        this.search();
    }

    /*
    Navigate to the full word detail page,
    passing along the selected Word.
    */
    private showWordDetail(event: any) {
        console.log(event);
    }
    
    /*
    Applies a map function to the word list where
    each is checked for a search string match.
    */
    private search() {
        this.searchValue = this.searchValue.trim();
        
        this.words = this.words
            .map( words => {
                return words.map(this.searchMap, this);
            });
    }
	
    /*
    Sets the "visible" property of each word, based on the
    search string currently in the search input.
    */
	private searchMap( word: Word, index: number ) {
        word.visible = word.contains(this.searchValue);
        return word;
	}


    private openPage( page:any ) {
        this.navCtrl.push(AddWordPage)
    }
	
	
	

}
