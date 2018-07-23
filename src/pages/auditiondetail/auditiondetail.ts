import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuditiondetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auditiondetail',
  templateUrl: 'auditiondetail.html',
})
export class AuditiondetailPage {
  public audition: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.audition = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditiondetailPage');
  }

   openURL(url) {
    if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
    }
    window.open(url, '_blank', 'location=no');
  }

}
