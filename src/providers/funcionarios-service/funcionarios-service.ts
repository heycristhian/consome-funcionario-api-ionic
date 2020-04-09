import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../../model/funcionario';



@Injectable()
export class FuncionariosServiceProvider {

  private _url: string = 'http://localhost:8080/heycristhian-service/funcionarios';

  constructor(private _http: HttpClient) {
  }

  getFuncionarios() {
    return this._http.get<Funcionario[]>(this._url);
  }

  enviarPost(nome: string, cpf: string, dataNascimento: string, descricaoCargo: string) {
    return this._http.post(this._url, {nome, cpf, dataNascimento, descricaoCargo})
  }
}
