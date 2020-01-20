import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { KeywordComponent } from '../keyword/keyword.component';

@Component({
  selector: 'app-keyword-dialog',
  templateUrl: './keyword-dialog.component.html',
  styleUrls: ['./keyword-dialog.component.css']
})
export class KeywordDialogComponent {

  constructor(public dialogRef: MatDialogRef<KeywordComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

}
