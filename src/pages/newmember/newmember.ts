import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NewmemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newmember',
  templateUrl: 'newmember.html',
})
export class NewmemberPage {
  member = {
    IDMem:"",
    NameMem:"",
    PassMem:"",
    NicknameMem:"",
    EmailMem:"",
    TelMem:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,
    private alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewmemberPage');
  }
  newmember(){
    let url="http://localhost:8080/member";
    console.log(this.member);
    this.http.post(url, this.member)
      .subscribe(
        res=>{
          this.data = res;
          if(this.data.msg==true){
            this.showAlert("Success", "Data added");
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