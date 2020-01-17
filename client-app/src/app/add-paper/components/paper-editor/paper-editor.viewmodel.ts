import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class PaperEditorViewModel{

    
    public authorsArray: Array<Author>;
    public abstractParagraphsArray: Array<string>;

    constructor(private formBuilder: FormBuilder, private editPaperForm: FormGroup) {
        this.authorsArray = new Array<Author>();
        this.abstractParagraphsArray = new Array<string>();
    }

    get authors() {
        return this.editPaperForm.get('authors') as FormArray;
    }

    get abstract() {
        return this.editPaperForm.get('abstract') as FormArray;
    }

    addAuthor(author) {
        this.authorsArray.push(author);
        this.authors.push(this.formBuilder.control(false));
    }

    removeAuthor(i) {
        this.authorsArray.splice(i, 1);
        this.authors.removeAt(i);
    }

    addParagraphToAbstract(paragraph) {
        this.abstractParagraphsArray.push(paragraph);
        this.abstract.push(this.formBuilder.control(false));
    }

    removeParagraphFromAbstract(i) {
        this.abstractParagraphsArray.splice(i, 1);
        this.abstract.removeAt(i);
    }

}