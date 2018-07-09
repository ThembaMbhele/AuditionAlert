import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController, LoadingController  } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
  public submitAttempt: boolean = false;
  public contactUsForm: FormGroup;
  public showError: boolean = false;
  public message = {
    message: '',
    fullName: '',
    subject: '',
    emailAddress: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.contactUsForm = formBuilder.group({
      message: ['', Validators.compose([Validators.required])],
      fullName: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      emailAddress: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  send(){
    this.submitAttempt = true;

    if(this.contactUsForm.valid){
       var loader = this.loadingCtrl.create({
        content: "Please wait..."
      });

      loader.present();
      this.http.post('http://197.242.149.23/api/contactUs', this.message).subscribe(data => {
        if (data) {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: 'Your message has been sent successful.',
            duration: 2000,
            position: 'top'
          });
          toast.present(toast);
          this.navCtrl.setRoot(DashboardPage);
        } else {
          loader.dismiss();
          this.showError = true;
        }
      });
    }   
  }

}
