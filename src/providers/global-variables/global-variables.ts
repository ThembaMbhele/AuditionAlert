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
 public userType: any = null;
 public firstTimeLogin: boolean = false;
 public selectedAudition: any;

  constructor(public http: HttpClient) {
    console.log('Hello GlobalVariablesProvider Provider');
  }
  
  setAudition(audition)
  {
      this.selectedAudition = audition;
  }
  
  getAudition()
  {
      return this.selectedAudition;
  }

  setUserType(userType)
  {
      this.userType = userType;
  }
  
  getUserType()
  {
      return this.userType;
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
