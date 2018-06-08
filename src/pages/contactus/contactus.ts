import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  send(){
    this.navCtrl.setRoot(DashboardPage);    
  }

}
