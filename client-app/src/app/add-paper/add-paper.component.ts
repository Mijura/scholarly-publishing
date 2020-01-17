import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AddPaperViewModel } from './add-paper.viewmodel';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent {
  
  public vm: AddPaperViewModel;

  constructor(private formBuilder: FormBuilder) { 
    this.vm = new AddPaperViewModel(this.formBuilder);
  }

  get editPaperForm(){
    return this.vm.editPaperForm;
  }

  addPaper() {
    alert(this.vm.editPaperForm.value.authors.length)
  }

}
