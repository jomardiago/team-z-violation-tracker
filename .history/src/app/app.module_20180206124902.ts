import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViolationInputFormComponent } from './violation-input-form/violation-input-form.component';
import { ViolationTableComponent } from './violation-table/violation-table.component';
import { environment } from '../environments/environment';


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
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
