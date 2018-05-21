import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { dadosPage } from './dados';

@NgModule({
  declarations: [
    dadosPage,
  ],
  imports: [
    IonicPageModule.forChild(dadosPage),
  ],
})
export class dadosPageModule {}
