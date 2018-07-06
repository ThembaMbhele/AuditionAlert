import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { NativeAudio } from '@ionic-native/native-audio';
import { AuditionProvider } from '../../providers/audition/audition';
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
    public auditions: any[];
    public url: string = "http://localhost/"

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public audio: NativeAudio, public globalVariable: GlobalVariablesProvider,
              public auditionProvider: AuditionProvider) {
              
    /* if first time login, play audio*/
    //this.showSlides = this.globalVariable.getFirstTimeLogin();
    if (this.globalVariable.getFirstTimeLogin() == true)
    {
        this.audio.preloadSimple('welcome', '../assets/audio/welcome.m4a')
            .then(() => {
                this.audio.play('welcome');
            })
    }
    else
    {
        //get audition events
        this.auditionProvider.getAuditions().subscribe((response: any[])=>
        {
            this.auditions = response; 
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openUpload(){
    this.navCtrl.push(UploadeventPage);
  }

}
