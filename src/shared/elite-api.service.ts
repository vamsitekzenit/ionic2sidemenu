import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class EliteApi{

    private baseUrl="https://ionic-2-1813a.firebaseio.com"

    currentTourney:any={};

constructor(private http:Http){
    
}
   
   getTournaments(){
             return new Promise(resolve=>{
                 this.http.get(`${this.baseUrl}/tournaments.json`)
                 .subscribe(res=>resolve(res.json()));
             });
   }

   getTournamemtData(tourneyId) :Observable<any>{
       return  this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
       .map((response:Response)=>{
               this.currentTourney=response.json();
               return this.currentTourney
       });
   }

}