import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

export class AddPaperViewModel{

    public editPaperForm : FormGroup;

    constructor(public formBuilder: FormBuilder){
        this.editPaperForm = this.formBuilder.group({
            title: new FormControl(""),
            authors: this.formBuilder.array([]),
            abstract: this.formBuilder.array([])
        })
    }
}