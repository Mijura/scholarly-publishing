import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaperComponent } from './add-paper.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { ServicesModule } from '../shared/services/services.module';
import { AddPaperService } from './add-paper.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddPaperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [
    AddPaperService
  ]
})
export class AddPaperModule { }
