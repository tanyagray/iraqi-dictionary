var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// Must export the config
export var firebaseConfig = {
    apiKey: "AIzaSyC6NaqYyoDMF1YsPNJfxas61xuxBAyurDI",
    authDomain: "learn-arabic-b456c.firebaseapp.com",
    databaseURL: "https://learn-arabic-b456c.firebaseio.com",
    storageBucket: "learn-arabic-b456c.appspot.com",
    messagingSenderId: "383215148151"
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage
            ],
            imports: [
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
