import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { MatPaginatorModule, MatTableModule, MatDatepickerModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatRadioModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { TeamRetroComponent } from './component/team-retro/team-retro.component';
import { ReadIssuedataComponent } from './component/read-issuedata/read-issuedata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamRetroComponent,
    ReadIssuedataComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
