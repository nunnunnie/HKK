import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
    NameMem:"",
    PassMem:"",
    NicknameMem:"",
    EmailMem:"",
    TelMem:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HTTP) {

  }
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewmemberPage');
  }
  newmember(){
    let url="http://localhost:8080/memner";

    this.http.post(url,this.member,{}).then(data=>{
      console.log(data.data.msg);
    });
}

}