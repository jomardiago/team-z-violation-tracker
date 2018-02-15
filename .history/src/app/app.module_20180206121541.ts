import { BrowserModule } from '@angular/platform-browser';
import { NgModule, FormsModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
