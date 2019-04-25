import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { ResultPage } from '../pages/result/result';
import { NewmemberPage } from '../pages/newmember/newmember';
import { EditmemberPage } from '../pages/editmember/editmember';
import { HomehPage } from '../pages/homeh/homeh';
import { HongkwamkitPage } from '../pages/hongkwamkit/hongkwamkit';
import { DetailhongPage } from '../pages/detailhong/detailhong';
import { EdithongPage } from '../pages/edithong/edithong';
import { NewactivityPage } from '../pages/newactivity/newactivity';
import { TopicPage } from '../pages/topic/topic';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailPage,
    ResultPage,
    NewmemberPage,
    TabsPage,
    EditmemberPage,
    HomehPage,
    HongkwamkitPage,
    DetailhongPage,
    EdithongPage,
    NewactivityPage,
    TopicPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailPage,
    ResultPage,
    NewmemberPage,
    TabsPage,
    EditmemberPage,
    HomehPage,
    HongkwamkitPage,
    DetailhongPage,
    EdithongPage,
    NewactivityPage,
    TopicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
