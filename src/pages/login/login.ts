import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

   login(){
    this.navCtrl.setRoot(DashboardPage)
  }

}
