<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UploadeventPage } from '../uploadEvent/uploadEvent';
=======
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
>>>>>>> af9a4aca2be15ec970fe2ba0c5b606eb5aa0db56

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

  constructor(public navCtrl: NavController, public navParams: NavParams) {

=======
  
  public showNavBar = false;
  constructor(public navCtrl: NavController) {
      setTimeout(this.showNav(this.navCtrl), 10000);
       
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
     
  }
  
  showNav(navCtrl)
  {
      this.navCtrl.setRoot(LoginPage);
>>>>>>> af9a4aca2be15ec970fe2ba0c5b606eb5aa0db56
  }

  openUpload(){
    this.navCtrl.push(UploadeventPage);
  }

}
