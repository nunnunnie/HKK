import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NewmemberPage } from '../newmember/newmember';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { EditmemberPage } from '../editmember/editmember';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  member:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http,
    private alertCtrl: AlertController){
    this.getdata();
  }
  
  showDetail(id){
    this.navCtrl.push(DetailPage,{IDMem: id});    
  }
  editDetail(id){
    this.navCtrl.push(EditmemberPage,{IDMem: id});    
  }
  showNewmember(){
    this.navCtrl.push(NewmemberPage);
  }
  getdata(){
    this.http.get('http://localhost:8080/member')
    .map(res=>res.json())
    .subscribe(data=>{
      this.member = data;
    console.log(this.member);

    });
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
  showAlert(msgTitle:string,message:string){
    const alert = this.alertCtrl.create({
      title: msgTitle,
      subTitle: message,
      buttons: ["OK"]

    });
    alert.present();
  } 
  ionViewWillEnter(){
    this.getdata();
  }
}
