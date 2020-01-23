import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeywordDialogComponent } from '../keyword-dialog/keyword-dialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { KeywordViewModel } from './keyword.viewmodel';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css', './keyword.component.css']
})
export class KeywordComponent implements OnInit{

  @Input() 
  editPaperForm: FormGroup;

  @Input()
  formBuilder: FormBuilder;

  vm: KeywordViewModel;

  constructor(public dialog: MatDialog) { }

  ngOnInit(){
    this.vm = new KeywordViewModel(this.editPaperForm, this.formBuilder);
  }

  get keywords(){
    return this.vm.keywordsArray;
  }

  openKeywordDialog(): void {
    const dialogRef = this.dialog.open(KeywordDialogComponent, {
      width: '250px',
      data: { keyword: '' }
    })

    dialogRef.afterClosed().subscribe(result =>{
      this.addKeyword(result);
    })
  }

  addKeyword(keywordText){
    let keyword: Keyword = {
      text: keywordText
    }
    this.vm.addKeyword(keyword);
  }

  removeKeyword(i){
    this.vm.removeKeyword(i);
  }

}
