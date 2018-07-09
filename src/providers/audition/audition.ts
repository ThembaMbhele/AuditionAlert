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
      
<<<<<<< HEAD
      return this.http.post(this.url + "/uploadImage", formData);
=======
      return this.http.post("http://197.242.149.23/api/uploadImage", formData);
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }
  
  uploadEvent(audition)
  {
<<<<<<< HEAD
      return this.http.post(this.url + "/uploadAuditionEvent", audition);
=======
      return this.http.post('http://197.242.149.23/api/uploadAuditionEvent', audition);
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }
  
  getAuditions()
  {
<<<<<<< HEAD
      return this.http.get(this.url + "/getAuditionEvents");
=======
      return this.http.get('http://197.242.149.23/api/getAuditionEvents');
>>>>>>> 5bf8eb4bf42b09713afedf047c33f76ad58e228a
  }

}
