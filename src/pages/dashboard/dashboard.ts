import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { NativeAudio } from '@ionic-native/native-audio';
import { AuditionProvider } from '../../providers/audition/audition';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public auditionProvider: AuditionProvider) {
    //get audition events
    this.auditionProvider.getAuditions().
    subscribe((response: any[]) => {
      this.auditions = response;
      this.auditions.push({name:'First Audition',description:' sf  efef efsfds fsdfsd fsdfsdfsdf'});
       this.auditions.push({name:'Second Audition',description:' sf  efef efsfds fsdfsd fsdfsdfsdf'});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openUpload() {
    this.navCtrl.push(UploadeventPage);
  }

}
