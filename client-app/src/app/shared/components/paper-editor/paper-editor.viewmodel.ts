import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class PaperEditorViewModel{

    public abstractParagraphsArray: Array<string>;

    constructor(private formBuilder: FormBuilder, private editPaperForm: FormGroup) {
        this.abstractParagraphsArray = new Array<string>();
    }

    get abstract() {
        return this.editPaperForm.get('abstract') as FormArray;
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