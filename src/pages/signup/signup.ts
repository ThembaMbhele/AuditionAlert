import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HTTP } from '@ionic-native/http';
import { Http, Headers, RequestOptions } from '@angular/http';
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
              public http: HTTP) 
  {
      //get countries
      this.http.get('http://localhost/api/getCountries', {}, {}).then(data => 
      {
          this.countries = data;
      }, err => 
      {
          var errorMessage = JSON.stringify(err.json());
          console.log(errorMessage);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

   signup()
   {
       this.http.post('http://localhost/api/createUser', this.user, {})
                .subscribe(data=>
                {
                    this.navCtrl.setRoot(LoginPage);
                });     
   }

}
