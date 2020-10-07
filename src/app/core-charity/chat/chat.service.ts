import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class ChatService{

    serverUrl = "https://5ec2ce9e8ebdcc0016a5a32b.mockapi.io/api/users"

    constructor(private httpClient: HttpClient){

    }

    saveChat(chat: any){
        return this.httpClient.post(this.serverUrl, chat);
     }
 
     getChats(){
         return this.httpClient.get(this.serverUrl)
     }

}