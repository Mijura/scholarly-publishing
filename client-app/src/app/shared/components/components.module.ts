import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [PaperEditorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AutosizeModule
  ]
})
export class ComponentsModule { }
