import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  
  getUserById(parameters)
  {
      return this.http.post("http://localhost/api/getUserById", parameters);
  }
  
  getCountries()
  {
      return this.http.get("http://localhost/api/getCountries");
  }
  
  updateProfile(profile)
  {
      return this.http.post("http://localhost/api/updateUserById", profile);
  }

}
