import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
import { KeywordDialogComponent } from './keyword-dialog/keyword-dialog.component';
import { KeywordComponent } from './keyword/keyword.component';
import { TitleComponent } from './title/title.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    TitleComponent,
    KeywordComponent,
    KeywordDialogComponent, 
    PaperEditorComponent, AuthorsComponent
  ],
  exports: [
    PaperEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AutosizeModule
  ]
})
export class ComponentsModule { }
