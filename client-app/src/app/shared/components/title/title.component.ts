import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['../paper-editor/paper-editor.component.css']
})
export class TitleComponent {

  @Input()
  editPaperForm: FormGroup;
  
  constructor() { }

}
