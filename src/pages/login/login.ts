import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
  public loginForm: FormGroup;
  public showError: boolean = false;
  public submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public globalVariables: GlobalVariablesProvider, public storage: Storage, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      emailAddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push(SignupPage);
  }

  forgotPassword() {
    this.navCtrl.push(ForgotpasswordPage)
  }

  login(user) {
    this.submitAttempt = true;
     this.showError = false;
    if (this.loginForm.valid) {
      var loader = this.loadingCtrl.create({
        content: "Please wait..."
      });

      loader.present();      
      this.http.post("http://197.242.149.23/api/loginUser", user).subscribe((response: any) => {
        if (response.result == true) {
          this.storage.set('loggedin', true);
          this.globalVariables.setUserId(response.data.userId);
          this.storage.set('userType', response.data.userType);
          this.storage.set('userId', response.data.userId);
          this.globalVariables.setFirstTimeLogin(response.data.firstLogin);
          loader.dismiss();
          this.navCtrl.setRoot(DashboardPage);
        }
        else if (response.result == false) {
          loader.dismiss();
          this.showError = true;
        }
      });
    }

       this.http.post("http://auditionsalertsa.dedicated.co.za/api/loginUser", user).subscribe((response: any) => 
       {
           if(response.result == true)
           {
               this.globalVariables.setUserId(response.data.userId);
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
