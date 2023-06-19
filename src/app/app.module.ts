import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environment';



@NgModule({

  declarations: [

    AppComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
