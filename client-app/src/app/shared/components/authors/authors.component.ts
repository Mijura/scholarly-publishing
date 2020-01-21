import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthorsViewModel } from './authors.viewmodel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css']
})
export class AuthorsComponent implements OnInit{
  
  @Input()
  editPaperForm: FormGroup;
  @Input()
  formBuilder: FormBuilder;

  vm: AuthorsViewModel;

  ngOnInit(): void {
    this.vm = new AuthorsViewModel(this.editPaperForm, this.formBuilder);
    this.addAuthor();
  }

  get authors(){
    return this.vm.authorsArray;
  }

  addAuthor() {

    let author: Author = {
      firstName: '',
      lastName: '',
      institution: '',
      email: ''
    }

    this.vm.addAuthor(author);
  }

  removeAuthor(i){
    this.vm.removeAuthor(i);
  }

}
