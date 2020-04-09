import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormFuncionarioPage } from './form-funcionario';

@NgModule({
  declarations: [
    FormFuncionarioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormFuncionarioPage),
  ],
  exports: [
    FormFuncionarioPage
  ]
})
export class FormFuncionarioPageModule {}
