import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NavController} from 'ionic-angular';
import {TournamentsPage} from '../pages/pages';
import {EliteApi} from '../shared/shared';

import { MyTeamsPage,VibrationPage,GeolocationPage,CameraPage } from '../pages/pages';

 import { HttpModule  } from '@angular/http';


@Component({
  templateUrl: 'app.html',
  providers:[EliteApi,HttpModule]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  gohome(){
   this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

  goToVibration(){
    this.nav.push(VibrationPage);
  }

  goToGeolocation(){
    this.nav.push(GeolocationPage);
  }
  goToCamera(){
     this.nav.push(CameraPage);
  }
}
