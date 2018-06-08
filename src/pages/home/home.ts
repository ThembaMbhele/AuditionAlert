import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadEvent/uploadEvent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openUpload(){
    this.navCtrl.push(UploadeventPage);
  }

}
