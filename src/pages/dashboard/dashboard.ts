import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadevent/uploadevent';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public auditionProvider: AuditionProvider) {
    //get audition events
    this.auditionProvider.getAuditions().
    subscribe((response: any[]) => {
      this.auditions = response;
    });
  }

  timeConverter(datetime) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = datetime.getFullYear();
        var month = months[datetime.getMonth()];
        var date = datetime.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openUpload() {
    this.navCtrl.push(UploadeventPage);
  }

  openURL(URL){
    window.open(URL, '_system');
  }

}
