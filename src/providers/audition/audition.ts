import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuditionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuditionProvider {

  public url: string = "http://localhost/api";
  //public url: string = "http://auditionsalertsa.dedicated.co.za/api"
  constructor(public http: HttpClient) {
    console.log('Hello AuditionProvider Provider');
  }
  
  uploadAuditionImage(file)
  {
      const formData: FormData = new FormData();
      formData.append('file', file);
      
      return this.http.post(this.url + "/uploadImage", formData);
  }
  
  uploadEvent(audition)
  {
      return this.http.post(this.url + "/uploadAuditionEvent", audition);
  }
  
  getAuditions()
  {
      return this.http.get(this.url + "/getAuditionEvents");
  }

}
