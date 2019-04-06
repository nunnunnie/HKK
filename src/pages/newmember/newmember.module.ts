import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewmemberPage } from './newmember';

@NgModule({
  declarations: [
    NewmemberPage,
  ],
  imports: [
    IonicPageModule.forChild(NewmemberPage),
  ],
})
export class NewmemberPageModule {}
