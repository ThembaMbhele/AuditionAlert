import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HTTP } from '@ionic-native/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient} from  '@angular/common/http';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    
    public email = "";
    public country = "";
    
    public user = 
    {
        firstName: "",
        lastName:"",
        emailAddress: "",
        password: "",
        Country: ""  
    };
    
    public countries:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) 
  {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      //get countries
      this.http.get('http://localhost/api/getCountries').subscribe(data => 
      {
          this.countries = data;
      }, err => 
      {
          var errorMessage = "";
          console.log(errorMessage);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

   signup(user)
   {
       this.http.post('http://localhost/api/createUser', this.user)
                .subscribe(data=>
                {
                    if(data)
                    {
                        this.navCtrl.setRoot(LoginPage);
                    }
                });     
   }

}
