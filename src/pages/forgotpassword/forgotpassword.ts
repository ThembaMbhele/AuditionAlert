import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  public forgotPasswordForm: FormGroup;
  public submitAttempt: boolean = false;
  public showError: boolean = false;
  public user = {
    email: '',
    confirmEmail: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.forgotPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      confirmEmail: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  changePassword() {
    this.showError = false;
    this.submitAttempt = true;
    if (this.user.email != this.user.confirmEmail) {
      return false;
    }
    if (this.forgotPasswordForm.valid) {
      var loader = this.loadingCtrl.create({
        content: "Please wait..."
      });

      loader.present();
      this.http.post('http://197.242.149.23/api/sendPassword', {emailAddress: this.user.email}).subscribe(data => {
        if (data) {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: 'Your password has been sent to your email.',
            duration: 2000,
            position: 'bottom'
          });
          toast.present(toast);
          this.navCtrl.setRoot(LoginPage);
        } else {
          loader.dismiss();
          this.showError = true;
        }
      });
    }
   
  }

}
