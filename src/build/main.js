webpackJsonp([8],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		285,
		7
	],
	"../pages/geolocation/geolocation.module": [
		284,
		6
	],
	"../pages/standings/standings.module": [
		281,
		5
	],
	"../pages/team-detail/team-detail.module": [
		280,
		4
	],
	"../pages/team-home/team-home.module": [
		282,
		3
	],
	"../pages/teams/teams.module": [
		279,
		2
	],
	"../pages/tournaments/tournaments.module": [
		278,
		1
	],
	"../pages/vibration/vibration.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams_page__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_teams__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__teams_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__standings_standings__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vibration_vibration__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__vibration_vibration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geolocation_geolocation__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__geolocation_geolocation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__camera_camera__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__camera_camera__["a"]; });










//by using these page we can directly import to other pages as  ./pages/pages 
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TournamentsPage = (function () {
    function TournamentsPage(navCtrl, navParams, eliteApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.loadingController = loadingController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'loading..'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournaments().then(function (data) {
                _this.tournaments = data; //by using these loading content is shown
                loader.dismiss(); // to dismiss loader once data is retrieved
            });
        });
        //this.eliteApi.getTournaments().then(data=>this.tournaments=data)
    };
    //  ionViewWillEnter() {
    //   console.log('ionViewWillEnter TournamentsPage');            //events in ionic will fire depending on call
    // }
    // ionViewWillLeave() {
    //   console.log('ionViewWillLeave TournamentsPage');
    // }
    // ionDidLoaded() {
    //   console.log('ionDidLoaded TournamentsPage');
    // }     
    TournamentsPage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["h" /* TeamsPage */], item);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tournaments',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\tournaments\tournaments.html"*/'<!--\n  Generated template for the TournamentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select a Tournaments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of tournaments"  (click)="itemTapped($event,item)">{{item.name}}</button>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* EliteApi */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamsPage = (function () {
    function TeamsPage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var selectedTourney = this.navParams.data; //the data we are getting from tournaments team is assigned to the selectTourney and the id of tourney is passed as below
        //console.log(selectedTourney);
        this.eliteApi.getTournamemtData(selectedTourney.id).subscribe(function (data) {
            _this.teams = data.teams;
        });
    };
    TeamsPage.prototype.iteamTapped = function ($event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["g" /* TeamHomePage */], team);
    };
    return TeamsPage;
}());
TeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teams',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\teams\teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Teams</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button (click)="iteamTapped($event,team)" ion-item *ngFor="let team of teams">{{team.name}}</button>\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\teams\teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* EliteApi */]])
], TeamsPage);

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamDetailPage = (function () {
    function TeamDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.team = this.navParams.data;
    }
    return TeamDetailPage;
}());
TeamDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-detail',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\team-detail\team-detail.html"*/'<ion-header>\n  <ion-navbar primary>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>Team Detail</h1>\n\n  <h2>{{team.name}}</h2>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\team-detail\team-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TeamDetailPage);

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StandingsPage = (function () {
    function StandingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return StandingsPage;
}());
StandingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-standings',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\standings\standings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <h2></h2>\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\standings\standings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], StandingsPage);

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamHomePage = (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamDetailPage */];
        this.standingstab = __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* StandingsPage */];
        this.team = this.navParams.data;
    }
    TeamHomePage.prototype.gohome = function () {
        this.navCtrl.popToRoot(__WEBPACK_IMPORTED_MODULE_2__pages__["d" /* MyTeamsPage */]); //to navigate to home page directly without <- button
    };
    return TeamHomePage;
}());
TeamHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-home',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\team-home\team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n    <ion-title primary>{{team.name}}</ion-title>\n  \n\n  <ion-buttons end>\n\n<button (click)="gohome()"><ion-icon name="home"></ion-icon></button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-tabs>\n\n  <ion-tab tabTitle="Team" [root]="teamDetailTab" [rootParams]="team" tabIcon="basketball"></ion-tab> \n  <ion-tab tabTitle="Standings" [root]="standingstab" [rootParams]="team" tabIcon="poduim"></ion-tab>\n \n</ion-tabs>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\team-home\team-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TeamHomePage);

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VibrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VibrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VibrationPage = (function () {
    function VibrationPage(navCtrl, navParams, vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
    }
    VibrationPage.prototype.vibrate = function () {
        this.vibration.vibrate[2000]; //vibrates for the milli seconds specified in the array
    };
    VibrationPage.prototype.vibratePattern = function () {
        this.vibration.vibrate([2000, 1000, 500]); //vibrates for 2 sec and stops for 1 second and vibrates again after 500 milliseconds
    };
    return VibrationPage;
}());
VibrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vibration',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\vibration\vibration.html"*/'<!--\n  Generated template for the VibrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vibration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button full (click)="vibrate()">Vibrate</button>\n  <button full (click)="vibratePattern()">Vibrate Pattern</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\vibration\vibration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]])
], VibrationPage);

//# sourceMappingURL=vibration.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GeolocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GeolocationPage = (function () {
    function GeolocationPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    GeolocationPage.prototype.getGeolocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    return GeolocationPage;
}());
GeolocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-geolocation',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\geolocation\geolocation.html"*/'<!--\n  Generated template for the GeolocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Geolocation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button (click)="getGeolocation()">Get geo location</button>\n\n  <div *ngIf="location">\n             \n             <h3>Latitude:{{location.lat}}</h3>\n             <h3>Longitude:{{location.lng}}</h3>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\geolocation\geolocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], GeolocationPage);

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CameraPage = (function () {
    function CameraPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.takepicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgSrc = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\camera\camera.html"*/'<!--\n  Generated template for the CameraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>camera</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button (click)="takepicture()">Take a picture</button>\n\n  <ion-card *ngIf="imgSrc">\n    \n        <img [src]="imgSrc">\n    \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\camera\camera.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["d" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["i" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["b" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["f" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["h" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["e" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["g" /* TeamHomePage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["j" /* VibrationPage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["c" /* GeolocationPage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* CameraPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/tournaments/tournaments.module#TournamentsPageModule', name: 'TournamentsPage', segment: 'tournaments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-detail/team-detail.module#TeamDetailPageModule', name: 'TeamDetailPage', segment: 'team-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/standings/standings.module#StandingsPageModule', name: 'StandingsPage', segment: 'standings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-home/team-home.module#TeamHomePageModule', name: 'TeamHomePage', segment: 'team-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vibration/vibration.module#VibrationPageModule', name: 'VibrationPage', segment: 'vibration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/geolocation/geolocation.module#GeolocationPageModule', name: 'GeolocationPage', segment: 'geolocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["d" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["i" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["b" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["h" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["f" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["e" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pages__["g" /* TeamHomePage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["j" /* VibrationPage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["c" /* GeolocationPage */], __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* CameraPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyTeamsPage = (function () {
    function MyTeamsPage(nav) {
        this.nav = nav;
    }
    MyTeamsPage.prototype.goToTournament = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages__["i" /* TournamentsPage */]);
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\my-teams\my-teams.page.html"*/'<ion-header class="bar bar-header bar-dark">\n\n  <ion-navbar primary>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="bar bar-header bar-calm">Ionic2</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar secondary>\n\n    <ion-title>My teams</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<button (click)="goToTournament()" ion-button>Find a tournamement</button>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\my-teams\my-teams.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.page.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamePage = (function () {
    function GamePage() {
    }
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\pages\game\game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\pages\game\game.html"*/
    }),
    __metadata("design:paramtypes", [])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliteApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EliteApi = (function () {
    function EliteApi(http) {
        this.http = http;
        this.baseUrl = "https://ionic-2-1813a.firebaseio.com";
        this.currentTourney = {};
    }
    EliteApi.prototype.getTournaments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/tournaments.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    EliteApi.prototype.getTournamemtData = function (tourneyId) {
        var _this = this;
        return this.http.get(this.baseUrl + "/tournaments-data/" + tourneyId + ".json")
            .map(function (response) {
            _this.currentTourney = response.json();
            return _this.currentTourney;
        });
    };
    return EliteApi;
}());
EliteApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EliteApi);

//# sourceMappingURL=elite-api.service.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["d" /* MyTeamsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.gohome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["d" /* MyTeamsPage */]);
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["i" /* TournamentsPage */]);
    };
    MyApp.prototype.goToVibration = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["j" /* VibrationPage */]);
    };
    MyApp.prototype.goToGeolocation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["c" /* GeolocationPage */]);
    };
    MyApp.prototype.goToCamera = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* CameraPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Selfprojects\ionic2sidemenu\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="gohome()">Home</button>\n      <button menuClose ion-item (click)="goToTournaments()">Find a Tournament</button>\n      <button menuClose ion-item (click)="goToVibration()">Vibration</button>\n      <button menuClose ion-item (click)="goToGeolocation()">Geolocation</button>\n      <button menuClose ion-item (click)="goToCamera()">Camera</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Selfprojects\ionic2sidemenu\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* EliteApi */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elite_api_service__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__elite_api_service__["a"]; });

//# sourceMappingURL=shared.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map