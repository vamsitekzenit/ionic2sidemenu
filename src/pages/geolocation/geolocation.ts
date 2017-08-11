import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  location:{lat:number,lng:number};

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  getGeolocation(){

    this.geolocation.getCurrentPosition().then((resp) => {
          
          this.location={
            lat:resp.coords.latitude,       //displaying the got result
            lng:resp.coords.longitude
          }
}).catch((error) => {
  console.log('Error getting location', error);
});

  }

}
