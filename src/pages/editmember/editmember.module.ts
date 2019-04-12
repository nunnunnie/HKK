import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditmemberPage } from './editmember';

@NgModule({
  declarations: [
    EditmemberPage,
  ],
  imports: [
    IonicPageModule.forChild(EditmemberPage),
  ],
})
export class EditmemberPageModule {}
