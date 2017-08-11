import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private vibration: Vibration) {
  }

  vibrate(){
    this.vibration.vibrate[2000];  //vibrates for the milli seconds specified in the array
  }
  
  vibratePattern(){
    this.vibration.vibrate([2000,1000,500]); //vibrates for 2 sec and stops for 1 second and vibrates again after 500 milliseconds
  }
   
}
