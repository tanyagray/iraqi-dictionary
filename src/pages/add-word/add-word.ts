import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Word } from '../../model/word.model';

@Component({
    selector: 'add-word-page',
    templateUrl: 'add-word.html'
})
export class AddWordPage {

    wordForm: FormGroup;

    constructor(private formBuilder:FormBuilder) { 
        this.wordForm = this.formBuilder.group({
            language: 'en-US',
            type: '',
            name: '',
            base_word: '',
            with_diacritics: '',
            arabizi: '',
            translation: ''
        });  

        this.wordForm.valueChanges.subscribe(data => {
        console.log('form changes', data);
        console.log(this.wordForm.controls)
        });

    }


    private submitForm() {
        console.log(this.wordForm)
    }

}