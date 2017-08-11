import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';
import { GamePage,TeamsPage } from '../pages/pages';
import { TeamDetailPage,StandingsPage,TeamHomePage,VibrationPage,GeolocationPage,CameraPage} from '../pages/pages';
import { HttpModule  } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage,VibrationPage,GeolocationPage,CameraPage
    
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,VibrationPage,GeolocationPage,CameraPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Vibration,Geolocation,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
