import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profile = 
  {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      country: "",
      dateOfBirth: null,
      gender: "",
      career: "",
      cellPhone: "",
      id: null
  };
  
  public userId: any;
  public countries: any[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalVariables: GlobalVariablesProvider,
              public userProvider: UserProvider) {
              
      this.userId = this.globalVariables.getUserId();
      this.profile.id = this.userId;
      
      var requestId = 
      {
          id: this.userId
      };
              
      this.userProvider.getUserById(requestId).subscribe((response: any) =>
      {
          this.profile = response;
      });
      
      //get countries
      this.userProvider.getCountries().subscribe((response: any) => 
      {
         this.countries = response; 
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

   update(profile){
       //profile.id = this.userId;
       this.userProvider.updateProfile(profile).subscribe((response: any)=>
       {
           if(response.result == true)
           {
               this.navCtrl.setRoot(DashboardPage);
           }
           else
           {
               //display message
           }
       });
        
  }

}
