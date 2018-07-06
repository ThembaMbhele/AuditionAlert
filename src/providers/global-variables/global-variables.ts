import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariablesProvider {
    
 public userId: any = null;
 public firstTimeLogin: boolean = false;

  constructor(public http: HttpClient) {
    console.log('Hello GlobalVariablesProvider Provider');
  }
  
  setUserId(id)
  {
      this.userId = id;
  }
  
  getUserId()
  {
      return this.userId;
  }
  
  setFirstTimeLogin(value)
  {
      this.firstTimeLogin = value;
  }
  
  getFirstTimeLogin()
  {
      return this.firstTimeLogin;
  }

}
