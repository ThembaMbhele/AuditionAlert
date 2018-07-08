import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient} from  '@angular/common/http';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { Storage } from '@ionic/storage';

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
    
    public showError: boolean = false;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public globalVariables: GlobalVariablesProvider,public storage: Storage) {
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
     //this.navCtrl.setRoot(DashboardPage);
//this.storage.set('loggedin', true);
       this.http.post("http://localhost:7777/api/loginUser", user).subscribe((response: any) => 
       {
           if(response.result == true)
           {
               this.storage.set('loggedin', true);
               this.globalVariables.setUserId(response.data.userId);
               //this.storage.set('userId', response.data.userId);
               this.globalVariables.setFirstTimeLogin(response.data.firstLogin);
               this.navCtrl.setRoot(DashboardPage);
           }
           else if(response.result == false)
           {
               this.showError = true;
           }  
       });
       
  }

}
