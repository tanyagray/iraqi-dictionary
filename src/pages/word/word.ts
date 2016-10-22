import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Word } from '../../../.tmp/model/word.model';

@Component({
  selector: 'page-word',
  templateUrl: 'word.html'
})
export class WordPage {

	public word: Word;
	public wordDetail:any;

	constructor(params: NavParams) {

		this.word = params.get('word');
		//this.wordDetail = this.service.getWordDetail(this.word);		

  }

}
