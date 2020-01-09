import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPaperComponent } from './add-paper/add-paper.component';
import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AddPaperComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
