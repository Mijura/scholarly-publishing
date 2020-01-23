import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

export class AbstractViewModel{

    public abstractParagraphsArray: Array<Paragraph>;

    constructor(public editPaperForm: FormGroup, public formBuilder: FormBuilder) { 
        this.abstractParagraphsArray = new Array<Paragraph>();
    }

    get abstract() {
        return this.editPaperForm.get('abstract') as FormArray;
    }

    addParagraphToAbstract(paragraph) {
        this.abstractParagraphsArray.push(paragraph);
        this.abstract.push(this.formBuilder.group(paragraph));
    }

    removeParagraphFromAbstract(i) {
        this.abstractParagraphsArray.splice(i, 1);
        this.abstract.removeAt(i);
    }
}