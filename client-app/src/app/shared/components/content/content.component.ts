import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContentViewModel } from './content.viewmodel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css', './content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @Input() 
  editPaperForm: FormGroup;
  @Input()
  formBuilder: FormBuilder;

  vm: ContentViewModel;

  constructor() { }

  ngAfterViewInit(): void {
    this.addSection();
  }

  ngOnInit() {
    this.vm = new ContentViewModel(this.editPaperForm, this.formBuilder);
  }

  get sections(){
    return this.vm.sectionsArray;
  }

  addSection(){
    let section: Section = {
      title: "",
      sectionItems: new Array<Paragraph>()
    }
    this.vm.addSection(section);
    this.addParagraph(this.sections.length - 1)
  }

  addParagraph(i){
    let paragraph: Paragraph = {
      text: ''
    }
    this.vm.addParagraphToSection(i, paragraph);
  }

  removeSection(i){
    this.vm.removeSection(i);
  }

  removeParagraphFromSection(sectionIndex, paragraphIndex){
    this.vm.removeParagraphFromSection(sectionIndex, paragraphIndex)
  }

}
