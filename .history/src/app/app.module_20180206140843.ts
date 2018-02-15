import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViolationInputFormComponent } from './violation-input-form/violation-input-form.component';
import { ViolationTableComponent } from './violation-table/violation-table.component';
import { ViolationTypeServiceService } from './services/violation-type-service.service';
import { ViolationService } from './services/violation.service';


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
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [
    ViolationTypeServiceService,
    ViolationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
