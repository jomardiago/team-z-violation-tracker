import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViolationInputFormComponent } from './violation-input-form/violation-input-form.component';
import { ViolationTableComponent } from './violation-table/violation-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViolationInputFormComponent,
    ViolationTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
