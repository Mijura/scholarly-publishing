import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaperComponent } from './add-paper.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaperEditorComponent } from '../shared/components/paper-editor/paper-editor.component';

@NgModule({
  declarations: [
    AddPaperComponent, 
    PaperEditorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AddPaperModule { }
