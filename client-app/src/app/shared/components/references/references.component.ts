import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReferencesViewModel } from './references.viewmodel';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css']
})
export class ReferencesComponent implements OnInit, AfterViewInit {

  @Input()
  editPaperForm: FormGroup;
  @Input()
  formBuilder: FormBuilder;

  vm: ReferencesViewModel;

  constructor() { }

  ngAfterViewInit(){
    this.addReference();
  }

  ngOnInit() {
    this.vm = new ReferencesViewModel(this.editPaperForm, this.formBuilder);
  }

  get references(){
    return this.vm.referencesArray;
  }

  addReference(){
    let reference: Reference = {
      text: ''
    }

    this.vm.addReference(reference);
  }

  removeReference(i){
    this.vm.removeReference(i);
  }

}
