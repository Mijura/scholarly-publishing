import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class AuthorsViewModel{

    public authorsArray: Array<Author>;

    constructor(public editPaperForm: FormGroup, public formBuilder: FormBuilder){
        this.authorsArray = new Array<Author>();
    }

    get authors() {
        return this.editPaperForm.get('authors') as FormArray;
    }

    addAuthor(author) {
        this.authorsArray.push(author);
        this.authors.push(this.formBuilder.group(author));
    }

    removeAuthor(i) {
        this.authorsArray.splice(i, 1);
        this.authors.removeAt(i);
    }
}