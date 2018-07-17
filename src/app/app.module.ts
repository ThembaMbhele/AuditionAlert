import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import { UploadeventPage } from '../pages/uploadevent/uploadevent';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { WelcomePage } from '../pages/welcome/welcome';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';

import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { GlobalVariablesProvider } from '../providers/global-variables/global-variables';
import { UserProvider } from '../providers/user/user';
import { AuditionProvider } from '../providers/audition/audition';
import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [ 
    MyApp,
    HomePage, 
    SignupPage,
    UploadeventPage,
    AboutusPage,
    ContactusPage,
    HomePage,
    ListPage,
    LoginPage,
    ForgotpasswordPage,
    DashboardPage,
    ProfilePage,
    WelcomePage,
    TermsandconditionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    UploadeventPage,
    AboutusPage,
    ContactusPage,
    LoginPage,
    ForgotpasswordPage,
    DashboardPage,
    ProfilePage,
    WelcomePage,
    TermsandconditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    GlobalVariablesProvider,
    UserProvider,
    AuditionProvider,
    FileChooser,
    IOSFilePicker,
    Camera,
    File,
    FCM
  ]
})
export class AppModule {}
