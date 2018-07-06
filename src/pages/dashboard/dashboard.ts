import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { NativeAudio } from '@ionic-native/native-audio';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
    
    public showSlides: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public audio: NativeAudio, public globalVariable: GlobalVariablesProvider) {
              
    /* if first time login, play audio*/
    //this.showSlides = this.globalVariable.getFirstTimeLogin();
    if (this.globalVariable.getFirstTimeLogin() == true)
    {
        this.audio.preloadSimple('welcome', '../assets/audio/welcome.m4a')
            .then(() => {
                this.audio.play('welcome');
            })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openUpload(){
    this.navCtrl.push(UploadeventPage);
  }

}
