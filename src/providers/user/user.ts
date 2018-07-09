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
<<<<<<< HEAD
      return this.http.post(this.url + "/getUserById", parameters);
=======
      return this.http.post("http://197.242.149.23/api/getUserById", parameters);
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }
  
  getCountries()
  {
<<<<<<< HEAD
      return this.http.get(this.url + "/getCountries");
=======
      return this.http.get("http://197.242.149.23/api/getCountries");
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }
  
  updateProfile(profile)
  {
<<<<<<< HEAD
      return this.http.post(this.url + "/updateUserById", profile);
=======
      return this.http.post("http://197.242.149.23/api/updateUserById", profile);
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }

}
