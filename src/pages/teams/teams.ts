import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamHomePage} from '../pages';
import {EliteApi} from '../../shared/shared';

/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi:EliteApi) {
  }

  ionViewDidLoad(){
    let selectedTourney=this.navParams.data;   //the data we are getting from tournaments team is assigned to the selectTourney and the id of tourney is passed as below

    //console.log(selectedTourney);

    this.eliteApi.getTournamemtData(selectedTourney.id).subscribe(data=>{
      this.teams=data.teams;
    })
  }
    
    iteamTapped($event,team){
       this.navCtrl.push(TeamHomePage,team);
    }
}
