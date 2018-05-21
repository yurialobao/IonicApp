import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['HomePage'],
  priority: 'low'
})
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  continuar(): void{
    this.navCtrl.push('LocalizacaoPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPage');
  }

}
