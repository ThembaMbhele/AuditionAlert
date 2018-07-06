import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';
import { FileChooser } from '@ionic-native/file-chooser';

import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { GlobalVariablesProvider } from '../providers/global-variables/global-variables';
import { UserProvider } from '../providers/user/user';
import { AuditionProvider } from '../providers/audition/audition';

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
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    GlobalVariablesProvider,
    UserProvider,
    AuditionProvider,
    NativeAudio,
    FileChooser
  ]
})
export class AppModule {}
