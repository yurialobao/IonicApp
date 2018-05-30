import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  cadastroForm: FormGroup;


  constructor(//abaixo: parametros do construtor
    public formBuilder: FormBuilder,//para utilização do Form
    public navCtrl: NavController,
    public navParams: NavParams) {//implementação
      this.cadastroForm = this.formBuilder.group({
        nome: ['',[Validators.required, Validators.minLength(3)]],//validação do campo nome
        //cpf: ['',Validators.required],//validação do campo cpf
        //nascimento: [Validators.required],
        //sexo: ['',[Validators.required]],
        //senha: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(16)]]

      });



  }

  onSubmit(): void{
    console.log('Form submited');
  }

  cancelar(): void{
    this.navCtrl.setRoot(LoginPage);//retorna à pagina de login
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
