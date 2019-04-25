import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the EdithongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edithong',
  templateUrl: 'edithong.html',
})
export class EdithongPage {
  hongkwamkit = {
    IDHong:"",
    NameHong:"",
    PassHong:"",
  };
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController,private httpclient: HttpClient) {
    let IDHong=this.navParams.get('IDHong');
    let url= "http://localhost:8080/hongkwamkit/" + IDHong;
    console.log(url);
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data =>{
        this.hongkwamkit = data;
      });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdithongPage');
  }
  EdithongPage(){
    let IDHong=this.navParams.get('IDHong');
    let url= "http://localhost:8080/hongkwamkit/" + IDHong;
    console.log(this.hongkwamkit);
    this.httpclient.post(url, this.hongkwamkit)
      .subscribe(
        res=>{
          this.data = res;
          if(this.data.msg==true){
            this.showAlert("Success", "Data Update");
            this.navCtrl.popToRoot();
          }
        }
      );
  }

  showAlert(msgTitle:string,message:string){
    const alert = this.alertCtrl.create({
      title: msgTitle,
      subTitle: message,
      buttons: ["OK"]

    });
    alert.present();
  } 

}
