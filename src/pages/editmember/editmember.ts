import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';




/**
 * Generated class for the EditmemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editmember',
  templateUrl: 'editmember.html',
})
export class EditmemberPage {
  member = {
    IDMem:"",
    NameMem:"",
    PassMem:"",
    NicknameMem:"",
    EmailMem:"",
    TelMem:""
  };
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
     private alertCtrl: AlertController,private httpclient: HttpClient) {
    let IDMem=this.navParams.get('IDMem');
    let url= "http://localhost:8080/member/" + IDMem;
    console.log(url);
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data =>{
        this.member = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmemberPage');
  }
  editmember(){
    let IDMem=this.navParams.get('IDMem');
    let url= "http://localhost:8080/member/" + IDMem;
    console.log(this.member);
    this.httpclient.post(url, this.member)
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
