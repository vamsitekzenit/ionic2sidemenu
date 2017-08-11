import {Component} from '@angular/core';
import {TournamentsPage} from '../pages';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl:'my-teams.page.html'
})

export class  MyTeamsPage{

constructor(private nav:NavController){

}

goToTournament(){
    this.nav.push(TournamentsPage);
}

}