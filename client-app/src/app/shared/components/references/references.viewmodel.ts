import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class ReferencesViewModel {

    referencesArray: Array<Reference>;

    constructor(public editPaperForm: FormGroup, public formBuilder: FormBuilder) { 
        this.referencesArray = new Array<Reference>();
    }

    get references(){
        return this.editPaperForm.get('references') as FormArray;
    }

    addReference(reference: Reference) {
        this.referencesArray.push(reference);
        this.references.push(this.formBuilder.group(reference));
    }

    removeReference(i){
        this.referencesArray.splice(i, 1);
        this.references.removeAt(i);
    }
}