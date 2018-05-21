

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  chamar(): void{
    this.navCtrl.push('DadosPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
