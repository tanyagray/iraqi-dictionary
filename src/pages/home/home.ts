import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  
  words: Observable<any>;
  searchValue: Subject<String>;
  
  
  
  constructor(public navCtrl: NavController, private firebase: AngularFire) {
      
      this.searchValue = new Subject();
      
      let queryTerms = {
        limitToFirst: 100,
      }

      
      this.words = firebase.database.list('/words', { query: queryTerms })
        .filter( this.searchFilter, this );
        
      // todo: map to classes after filtering
  }
  
  
  // 1. create observable, with filter
  // 2. when search subject updates, restart observable
  
  
  
  search(event: any) {
    
		searchString: str = event.target.value.trim();
		console.log(searchString);
		
		 // TODO update search subject
		 
		 
		 // run observable again
		//this.words.next();

	}
	
	
	searchFilter( value: any[], index: number ) {
		
		value = value.filter( item => 
			let keep: boolean = index > 1;
			return keep;
		)
		
		return value;
	}
	
	/*
	filterFunc( word, index, parentObservable) {
	  return this.enMatch(word, searchString) || this.iqMatch(word, searchString) ;
	}
	
	enMatch( word:string, searchString:string ) {
	  console.log("en: ", word);
	  found = ( word['en_form_1'].indexOf(searchString) != -1 );
	  return found;
	}
	
	iqMatch( word:string, searchString:string ) {
	  found = ( word.['iq_form_1'].indexOf(searchString) != -1 );
	  return found;
	}
	*/
 

}
