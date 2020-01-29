import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { KeywordDialogComponent } from './keyword-dialog/keyword-dialog.component';
import { KeywordComponent } from './keyword/keyword.component';
import { TitleComponent } from './title/title.component';
import { AuthorsComponent } from './authors/authors.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ContentComponent } from './content/content.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    TitleComponent,
    KeywordComponent,
    KeywordDialogComponent, 
    AuthorsComponent,
    AbstractComponent,
    PaperEditorComponent,
    ContentComponent,
    ReferencesComponent
  ],
  exports: [
    PaperEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AutosizeModule,
    FormsModule
  ],
  entryComponents:[
    KeywordDialogComponent
  ]
})
export class ComponentsModule { }
