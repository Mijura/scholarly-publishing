import { Component, OnInit, Input } from '@angular/core';
import { PaperEditorViewModel } from './paper-editor.viewmodel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent implements OnInit{

  public vm: PaperEditorViewModel;
  
  @Input() editPaperForm: FormGroup;

  @Input() formBuilder: FormBuilder;

  ngOnInit(): void {
    this.vm = new PaperEditorViewModel(this.formBuilder, this.editPaperForm);
    this.addAuthor();
    this.addParagraphToAbstract();
  }

  get authors(){
    return this.vm.authorsArray;
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

    this.vm.addAuthor(author);
  }

  removeAuthor(i){
    this.vm.removeAuthor(i);
  }

  addParagraphToAbstract(){
    this.vm.addParagraphToAbstract('');
  }

  removeParagraphFromAbstract(i){
    this.vm.removeParagraphFromAbstract(i);
  }

}
