import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailhongPage } from '../detailhong/detailhong';
import { EdithongPage } from '../edithong/edithong';


/**
 * Generated class for the HongkwamkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hongkwamkit',
  templateUrl: 'hongkwamkit.html',
})
export class HongkwamkitPage {
  hongkwamkit = {
    IDHong:"",
    NameHong:"",
    PassHong:"",
  };
  getHongkwamkit:any;
  data:any=0;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http,
    private httpClient:HttpClient, private alertCtrl: AlertController){
      this.getdata();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HongkwamkitPage');
    
  }
  showDetailhong(id){
    this.navCtrl.push(DetailhongPage,{IDHong: id});    
  }
  EdithongPage(id){
    this.navCtrl.push(EdithongPage,{IDHong: id});    
  }
  hongkwamkitadd(){
    let url="http://localhost:8080/hongkwamkit";
    console.log(this.hongkwamkit);
    this.httpClient.post(url, this.hongkwamkit)
      .subscribe(
        res=>{
          this.data = res;
          if(this.data.msg==true){
            this.showAlert("Success", "Data added");
            this.hongkwamkit.IDHong='';
            this.hongkwamkit.NameHong='';
            this.hongkwamkit.PassHong='';
            this.getdata();
          }
        }
      );
  }

  getdata(){
    this.http.get('http://localhost:8080/hongkwamkit')
    .map(res=>res.json())
    .subscribe(data=>{
      this.getHongkwamkit = data;
      console.log(this.getHongkwamkit);
    });
  }
  deleteDetailhong(IDHong){
    this.alertCtrl.create({
      title:"Confirm",
      subTitle:"Confitm delte?",
      buttons:[
        { 
          text: "Yes",
          handler: ()=>{
            let url="http://localhost:8080/hongkwamkit/"+IDHong;
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

}
