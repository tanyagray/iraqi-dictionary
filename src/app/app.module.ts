import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { TabsPage } from '../pages/tabs/tabs';
import { FirebaseService } from '../services/firebase.service';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyC6NaqYyoDMF1YsPNJfxas61xuxBAyurDI",
  authDomain: "learn-arabic-b456c.firebaseapp.com",
  databaseURL: "https://learn-arabic-b456c.firebaseio.com",
  storageBucket: "learn-arabic-b456c.appspot.com",
  messagingSenderId: "383215148151"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DictionaryPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DictionaryPage,
    TabsPage
  ],
  providers: [
    FirebaseService
  ]
})
export class AppModule {}
