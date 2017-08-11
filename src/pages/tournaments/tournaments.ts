import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyTeamsPage,TeamsPage} from '../pages';
import {EliteApi} from '../../shared/shared';

/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi:EliteApi,private loadingController:LoadingController) {
  }

  ionViewDidLoad() {                      //api changed before it was ionic viewloaded now it is ionviewdidload
    let loader=this.loadingController.create({
      content:'loading..'
    });

    loader.present().then(()=>{
      this.eliteApi.getTournaments().then(data=>{
        this.tournaments=data    //by using these loading content is shown
        loader.dismiss();        // to dismiss loader once data is retrieved
        });
    });

    //this.eliteApi.getTournaments().then(data=>this.tournaments=data)
  }
   
  //  ionViewWillEnter() {
  //   console.log('ionViewWillEnter TournamentsPage');            //events in ionic will fire depending on call
  // }
  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave TournamentsPage');
  // }
  // ionDidLoaded() {
  //   console.log('ionDidLoaded TournamentsPage');
  // }     


  itemTapped($event,item){
    this.navCtrl.push(TeamsPage,item);
  }

}
