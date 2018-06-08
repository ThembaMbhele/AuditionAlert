import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
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
  }

}
