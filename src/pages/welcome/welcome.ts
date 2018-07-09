import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public audio: NativeAudio) {
    this.audio.preloadComplex('welcome', '../assets/audio/welcome.mp3', 1, 1, 0).then(() => {
      this.audio.play('welcome');
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  register(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
