import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the UploadeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-uploadevent',
  templateUrl: 'uploadevent.html',
})
export class UploadeventPage {

  imageFile: String = "assets/imgs/aud1.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadeventPage');
  }

   upload(){
    this.navCtrl.setRoot(DashboardPage);    
  }

}
