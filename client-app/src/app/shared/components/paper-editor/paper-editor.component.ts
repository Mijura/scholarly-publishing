import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { PaperEditorViewModel } from './paper-editor.viewmodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorsComponent } from '../authors/authors.component';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent implements OnInit, AfterViewInit{

  public vm: PaperEditorViewModel;
  
  @Input() editPaperForm: FormGroup;
  @Input() formBuilder: FormBuilder;

  @ViewChild('authors', {static: false})
  authors: AuthorsComponent;

  ngOnInit(): void {
    this.vm = new PaperEditorViewModel(this.formBuilder, this.editPaperForm);
    this.addParagraphToAbstract();
  }

  ngAfterViewInit(): void {
    this.addAuthor();
  }

  get abstract(){
    return this.vm.abstractParagraphsArray;
  }

  addAuthor() {

    let author: Author = {
      firstName: '',
      lastName: '',
      institution: '',
      email: ''
    }

    this.authors.addAuthor(author);
  }

  removeAuthor(i){
    this.authors.removeAuthor(i);
  }

  addParagraphToAbstract(){
    this.vm.addParagraphToAbstract('');
  }

  removeParagraphFromAbstract(i){
    this.vm.removeParagraphFromAbstract(i);
  }

}
