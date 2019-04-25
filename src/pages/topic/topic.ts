import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { DetailhongPage } from '../detailhong/detailhong';
/**
 * Generated class for the TopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html',
})
export class TopicPage {
  topic = {
    IDtopic:"",
    Nametopic:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,
    private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicPage');
  }
  newtopic(){
    let url="http://localhost:8080/topic";
    console.log(this.topic);
    this.http.post(url, this.topic)
      .subscribe(
        res=>{
          this.data = res;
          if(this.data.msg==true){
            this.showAlert("Success", "Data added");
            this.navCtrl.push(DetailhongPage);
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
