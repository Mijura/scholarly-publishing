import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AbstractViewModel } from './abstract.viewmodel';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css']
})
export class AbstractComponent implements OnInit {

  @Input()
  editPaperForm: FormGroup;
  @Input()
  formBuilder: FormBuilder;

  vm: AbstractViewModel;

  ngOnInit() {
    this.vm = new AbstractViewModel(this.editPaperForm, this.formBuilder);
    this.addParagraphToAbstract();
  }

  get abstract(){
    return this.vm.abstractParagraphsArray;
  }

  addParagraphToAbstract(){
    let paragraph :Paragraph = {
      text: ''
    }

    this.vm.addParagraphToAbstract(paragraph);
  }

  removeParagraphFromAbstract(i){
    this.vm.removeParagraphFromAbstract(i);
  }

}
