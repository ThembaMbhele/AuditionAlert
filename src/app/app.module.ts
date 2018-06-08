import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { SignupPage } from '../pages/signup/signup';
import { UploadeventPage } from '../pages/uploadEvent/uploadEvent';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
=======
import { LoginPage } from '../pages/login/login';
>>>>>>> af9a4aca2be15ec970fe2ba0c5b606eb5aa0db56

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [ 
    MyApp,
<<<<<<< HEAD
    HomePage, 
    ListPage,
    SignupPage,
    UploadeventPage,
    AboutusPage,
    ContactusPage
=======
    HomePage,
    ListPage,
    LoginPage
>>>>>>> af9a4aca2be15ec970fe2ba0c5b606eb5aa0db56
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    SignupPage,
    UploadeventPage,
    AboutusPage,
    ContactusPage
=======
    LoginPage
>>>>>>> af9a4aca2be15ec970fe2ba0c5b606eb5aa0db56
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
