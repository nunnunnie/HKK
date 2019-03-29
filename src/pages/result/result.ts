import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  member:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let IDMem=this.navParams.get('keyword');
    let url= "http://localhost:8080/member/name/"+IDMem;
    console.log(url);
    this.http.get(url)
    .map(res=>res.json())
    .subscribe(data =>{
      this.member = data;
    });
  }

  showDetail(id){
    this.navCtrl.push(DetailPage,{IDMem: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
