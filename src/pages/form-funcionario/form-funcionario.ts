import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FuncionariosServiceProvider } from '../../providers/funcionarios-service/funcionarios-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-form-funcionario',
  templateUrl: 'form-funcionario.html',
})
export class FormFuncionarioPage {

  public nome: string = '';
  public cpf: string = '';
  public dataNascimento: string = '';
  public descricaoCargo: string = '';
  private _alerta: Alert;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _funcionarioService: FuncionariosServiceProvider,
    private _alertCtrl: AlertController) { }

  cadastro() {

    console.log(this.dataNascimento);

    if (!this.nome || !this.cpf || !this.dataNascimento || !this.descricaoCargo) {
      this._alertCtrl.create({
        title: 'Campos obrigatórios',
        subTitle: 'Preencha todos os campos',
        buttons: [
          {
            text: 'Ok'
          }
        ]
      }).present();

      return;
    }

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'Ok'
        }
      ]

    })

    let mensagem = '';

    this._funcionarioService.enviarPost(this.nome, this.cpf, this.dataNascimento, this.descricaoCargo)
    .finally(
      () => {
        this._alerta.setSubTitle(mensagem);
        this._alerta.present();
      }
    )
      .subscribe(
        () => {
          mensagem = 'Cadastro realizado!';
          this.navCtrl.setRoot(HomePage);
        },
        () => {
          mensagem = 'Erro!';
        }
      );

  }

}
