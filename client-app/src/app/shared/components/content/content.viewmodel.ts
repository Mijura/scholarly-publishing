import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export class ContentViewModel {

    sectionsArray: Array<Section>;

    constructor(public editPaperForm: FormGroup, public formBuilder: FormBuilder) {
        this.sectionsArray = new Array<Section>();
    }

    get content(){
        return this.editPaperForm.get('content') as FormArray;
    }

    sectionItems(i){
        return this.content.controls[i].get('sectionItems') as FormArray;
    }

    addSection(section: Section) {
        this.sectionsArray.push(section);
        let a = {
            title: section.title,
            sectionItems: this.formBuilder.array([])
        }
        this.content.push(this.formBuilder.group(a));
    }

    removeSection(i){
        this.sectionsArray.splice(i, 1);
        this.content.removeAt(i);
    }

    addParagraphToSection(i, paragraph){
        this.sectionsArray[i].sectionItems.push(paragraph);
        this.sectionItems(i).push(this.formBuilder.group(paragraph));
    }

    removeParagraphFromSection(sectionIndex, paragraphIndex) {
        this.sectionsArray[sectionIndex].sectionItems.splice(paragraphIndex, 1);
        this.sectionItems(sectionIndex).removeAt(paragraphIndex);
    }
}