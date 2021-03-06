import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AddPaperModule } from './add-paper/add-paper.module';
import { LoginModule } from './login/login.module';
import { BaseService } from './shared/services/base.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    AddPaperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
