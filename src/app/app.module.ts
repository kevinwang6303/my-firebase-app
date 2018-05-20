import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // init
    AngularFireDatabaseModule, // add realtime DB module
    AngularFirestoreModule.enablePersistence(), // add cloudstore DB module
    AngularFireAuthModule, // add auth module
    AppRoutingModule,
    SharedModule.forRoot(),
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: { timestampsInSnapshots: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
