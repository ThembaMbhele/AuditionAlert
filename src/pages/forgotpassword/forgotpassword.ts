import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  changePassword(){
     this.navCtrl.setRoot(LoginPage); 
  }

}
