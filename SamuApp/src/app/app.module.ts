import { FirebaseAppConfig, AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

//configuração do firebase
const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyDt6yj48iYQ9VjSTfqrlyj0tb6iLCXo54k",
    authDomain: "samuapp-firebase.firebaseapp.com",
    databaseURL: "https://samuapp-firebase.firebaseio.com",
    storageBucket: "samuapp-firebase.appspot.com",
    messagingSenderId: "147293120047"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,//LoginPage no modulo principal sem LazyLoading

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    AngularFireModule.initializeApp(firebaseAppConfig)//iniciando AngularFire passando as configurações como parametro
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //{provide: LocationStrategy, useClass: PathLocationStrategy} //Ativa o modo HTML5
   ]
})
export class AppModule {}
