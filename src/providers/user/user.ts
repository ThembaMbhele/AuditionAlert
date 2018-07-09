import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
    
    public url: string = "http://localhost/api";
  //public url: string = "http://auditionsalertsa.dedicated.co.za/api"

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  
  getUserById(parameters)
  {
      return this.http.post(this.url + "/getUserById", parameters);
  }
  
  getCountries()
  {
      return this.http.get(this.url + "/getCountries");
  }
  
  updateProfile(profile)
  {
      return this.http.post(this.url + "/updateUserById", profile);
  }

}
