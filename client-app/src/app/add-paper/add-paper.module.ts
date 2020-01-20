import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaperComponent } from './add-paper.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaperEditorComponent } from '../shared/components/paper-editor/paper-editor.component';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [
    AddPaperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class AddPaperModule { }
