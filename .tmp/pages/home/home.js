var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
export var HomePage = (function () {
    function HomePage(navCtrl, firebase) {
        this.navCtrl = navCtrl;
        this.firebase = firebase;
        this.searchValue = new Subject();
        var queryTerms = {
            limitToFirst: 100,
        };
        this.words = firebase.database.list('/words', { query: queryTerms })
            .filter(this.searchFilter, this);
        // todo: map to classes after filtering
    }
    // 1. create observable, with filter
    // 2. when search subject updates, restart observable
    HomePage.prototype.search = function (event) {
        searchString: string = event.target.value.trim();
        console.log(searchString);
        // TODO update search subject
        // run observable again
        //this.words.next();
    };
    HomePage.prototype.searchFilter = function (value, index) {
        value = value.filter(item, function (index) {
            return keep;
        }, boolean = index > 1);
        return keep;
        return value;
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController, AngularFire])
    ], HomePage);
    return HomePage;
}());
