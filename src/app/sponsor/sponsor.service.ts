import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class SponsorService{

    serverUrl = "https://5ec2ce9e8ebdcc0016a5a32b.mockapi.io/api/sponsor"

    constructor(private httpClient: HttpClient){

    }

    saveCard(card: any){
        return this.httpClient.post(this.serverUrl, card);
     }
 
     getSponsor(){
         return this.httpClient.get(this.serverUrl)
     }

}