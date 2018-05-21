import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@IonicPage({
  priority: 'high'
})
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
