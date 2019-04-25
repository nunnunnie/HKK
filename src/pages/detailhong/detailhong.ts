import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NewmemberPage } from '../newmember/newmember';
import { EditmemberPage } from '../editmember/editmember';
import { DetailPage } from '../detail/detail';
import { TopicPage } from '../topic/topic';

import { AlertController } from 'ionic-angular';


/**
 * Generated class for the DetailhongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailhong',
  templateUrl: 'detailhong.html',
})
export class DetailhongPage {
  member:any=0;
  hongkwamkit:any=0;
  topic:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController) {
    let IDHong=this.navParams.get('IDHong');
    let url= "http://localhost:8080/hongkwamkit/" + IDHong;
    console.log(url);
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data =>{
        this.hongkwamkit = data;
      });
      this.getdata();
      this.getdatatopic();
      
  }
  getdata(){
    this.http.get('http://localhost:8080/member')
    .map(res=>res.json())
    .subscribe(data=>{
      this.member = data;
    console.log(this.member);

    });
  }

  getdatatopic(){
    this.http.get('http://localhost:8080/topic')
    .map(res=>res.json())
    .subscribe(data=>{
      this.topic = data;
    console.log(this.topic);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailhongPage');
  }
  showNewmember(){
    this.navCtrl.push(NewmemberPage);
  }
  showDetail(id){
    this.navCtrl.push(DetailPage,{IDMem: id});    
  }
  showNewtopic(){
    this.navCtrl.push(TopicPage);
  }
  editDetail(id){
    this.navCtrl.push(EditmemberPage,{IDMem: id});    
  }
  deleteDetail(IDMem){
    this.alertCtrl.create({
      title:"Confirm",
      subTitle:"Confitm delte?",
      buttons:[
        { 
          text: "Yes",
          handler: ()=>{
            let url="http://localhost:8080/member/"+IDMem;
            this.http.delete(url)
              .subscribe(
                res=>{
                  this.data = res;
                  console.log(this.data);
                    this.showAlert("Success", "Data deleted");
                    this.getdata();
                });
          }
        },
        {
          text: "No",
          handler: ()=>{}
        }
      ]
    })
    .present();
  }

  deleteDetailtopic(IDtopic){
    this.alertCtrl.create({
      title:"Confirm",
      subTitle:"Confitm delte?",
      buttons:[
        { 
          text: "Yes",
          handler: ()=>{
            let url="http://localhost:8080/topic/"+IDtopic;
            this.http.delete(url)
              .subscribe(
                res=>{
                  this.data = res;
                  console.log(this.data);
                    this.showAlert("Success", "Data deleted");
                    this.navCtrl.push(DetailhongPage);
                });
          }
        },
        {
          text: "No",
          handler: ()=>{}
        }
      ]
    })
    .present();
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
