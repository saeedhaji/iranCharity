import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class UsersService{

    serverUrl:string="https://5ec2ce9e8ebdcc0016a5a32b.mockapi.io/api/users"

    constructor(private httpClient:HttpClient){

    }

    saveUser(user: any){
        return this.httpClient.post(this.serverUrl, user);
     }
 
     getUsers(){
         return this.httpClient.get(this.serverUrl)
     }

    removeUser(userId: string){
        return this.httpClient.delete(`${this.serverUrl}/${userId}`)
    }

}