import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuditionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuditionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuditionProvider Provider');
  }
  
  uploadAuditionImage(file)
  {
      const formData: FormData = new FormData();
      formData.append('file', file);
      
      return this.http.post("http://localhost/api/uploadImage", formData);
  }
  
  uploadEvent(audition)
  {
      return this.http.post('http://localhost/api/uploadAuditionEvent', audition);
  }
  
  getAuditions()
  {
      return this.http.get('http://localhost/api/getAuditionEvents');
  }

}
