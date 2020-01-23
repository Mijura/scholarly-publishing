import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorsComponent } from '../authors/authors.component';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent{
  
  @Input() editPaperForm: FormGroup;
  @Input() formBuilder: FormBuilder;

}
