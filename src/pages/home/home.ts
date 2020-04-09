import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Funcionario } from '../../model/funcionario';
import { HttpErrorResponse} from '@angular/common/http'
import { FuncionariosServiceProvider } from '../../providers/funcionarios-service/funcionarios-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { FormFuncionarioPage } from '../form-funcionario/form-funcionario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

  public funcionarios: Funcionario[];

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _carroService: FuncionariosServiceProvider) { }

    ionViewDidLoad() {
      let loading = this._loadingCtrl.create({
        content: 'Carregando todos os funcionários...'
      });

      loading.present();

      this._carroService.getFuncionarios()
                .subscribe((funcionarios) => {
                this.funcionarios = funcionarios;

                loading.dismiss();
                },
                (err: HttpErrorResponse) => {
                  console.log(err);

                  loading.dismiss();

                  this._alertCtrl.create({
                    title: 'Falha na conexão',
                    subTitle: 'Não foi possível carregar a página. Tente novamente mais tarde!',
                    buttons: [
                      {
                        text: 'Ok'
                      }
                    ]
                  }).present();
                }
                );
    }

    adicionaFuncionario(){
      this.navCtrl.push(FormFuncionarioPage.name);
    }
}
