import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient} from  '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
    public user = {
        emailAddress: "",
        password: ""
    };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(SignupPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotpasswordPage)
  }

   login(user)
   {
       this.http.post("http://localhost:7777/api/loginUser", user).subscribe(data => 
       {
           if(data)
           {
               this.navCtrl.setRoot(DashboardPage);
           }  
       });
       
  }

}
