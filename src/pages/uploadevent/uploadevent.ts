import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { AuditionProvider } from '../../providers/audition/audition';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { FileChooser } from '@ionic-native/file-chooser';
import { Platform } from 'ionic-angular';

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
  
  public event = 
  {
      auditionName: "",
      auditionUrl: "",
      userId: null,
      auditionDescription: ""
  };
  
  public auditionImage: any;
  public userId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public globalVariables: GlobalVariablesProvider,
              public auditionProvider: AuditionProvider,
              public fileChooser: FileChooser,
              public platform: Platform) {
              
              this.userId = this.globalVariables.getUserId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadeventPage');
  }

   uploadPoster()
   {
      if(this.platform.is('android'))
      {
          this.fileChooser.open()
                      .then(uri => 
                              console.log(uri)
                      )
                      .catch(e => console.log(e));
      }
      else if(this.platform.is('ios'))
      {
        
      }
      

   }

   upload(event){
       event.userId = this.userId.userId;
       this.auditionProvider.uploadEvent(event).subscribe((response: any)=>{
          if(response.result == true)
          {
              this.navCtrl.setRoot(DashboardPage);
          }
          else
          {
              
          } 
       });  
  }

}
