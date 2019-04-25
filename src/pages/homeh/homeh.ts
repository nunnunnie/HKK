import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HongkwamkitPage } from '../hongkwamkit/hongkwamkit';

//import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HomehPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeh',
  templateUrl: 'homeh.html',
})
export class HomehPage {
  hongkwamkit:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http){
    this.getdata();
  }
  showhongkwamkit(){
    this.navCtrl.push(HongkwamkitPage);
  }

  getdata(){
    this.http.get('http://localhost:8080/hongkwamkit')
    .map(res=>res.json())
    .subscribe(data=>{
      this.hongkwamkit = data;
    console.log(this.hongkwamkit);

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomehPage');
  }

  
}
