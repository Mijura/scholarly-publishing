import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorsComponent } from '../authors/authors.component';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent implements AfterViewInit{
  
  @Input() editPaperForm: FormGroup;
  @Input() formBuilder: FormBuilder;

  @ViewChild('authors', {static: false})
  authors: AuthorsComponent;
  @ViewChild('abstract', {static: false})
  abstract: AbstractComponent;

  ngAfterViewInit(): void {
    this.addAuthor();
    this.addParagraphToAbstract();
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
    this.abstract.addParagraphToAbstract();
  }

  removeParagraphFromAbstract(i){
    this.abstract.removeParagraphFromAbstract(i);
  }

}
