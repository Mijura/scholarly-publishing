import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class KeywordViewModel{

    keywordsArray: Array<Keyword>;

    constructor(public editPaperForm: FormGroup, public formBuilder: FormBuilder) { 
        this.keywordsArray = new Array<Keyword>();
    }

    get keywords(){
        return this.editPaperForm.get('keywords') as FormArray;
    }

    addKeyword(keyword){
        this.keywordsArray.push(keyword);
        this.keywords.push(this.formBuilder.control(keyword))
    }

    removeKeyword(i){
        this.keywordsArray.splice(i, 1);
        this.keywords.removeAt(i);
    }

}