import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WishesService{
    serverUrl: string = "https://5ec2ce9e8ebdcc0016a5a32b.mockapi.io/api/wishes";

    constructor(private httpClient: HttpClient){

    }
    
    saveWish(wish: any){
       return this.httpClient.post(this.serverUrl, wish);
    }

    getWishes(){
        return this.httpClient.get(this.serverUrl)
    }
}

        