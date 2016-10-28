import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Word } from '../../model/word.model';

@Component({
    selector: 'page-add-word',
    templateUrl: 'add-word.html'
})
export class AddWordPage {

    word: FormGroup;

    constructor(private formBuilder:FormBuilder) { 
           this.word = this.formBuilder.group({
            language: '',
            type: '',
            name: '',
            base_word: '',
            with_diacritics: '',
            arabizi: ''
            // TODO: translations
        });  

    }


    private submitForm() {
        console.log(this.word)
    }

}