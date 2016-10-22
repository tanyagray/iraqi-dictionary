import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable'

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Word } from '../../model/word.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
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
    

    private search(event: any = null) {
        this.searchValue = this.searchValue.trim();
        
        this.words = this.words
            .map( words => {
                return words.map(this.searchMap, this);
            });
    }
	
	private searchMap( word: any, index: number ) {
        
        let visible: boolean = true;

        if( this.searchValue.length > 0 ) {

		    visible = word.contains
        }

        word.visible = word.contains(this.searchValue);
        
        return word;

	}
	
	
	

}
