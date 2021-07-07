import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
 

import {
  ConversaoResponse,
  Conversao
} from './../../models';

@Injectable()
export class ConversorService {


  public attayteste = [1,2,3,4,5]


  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=ca4b01dd0edefd883392e1b16d54c3d3&format=1";

  constructor(
    private  http: HttpClient
  ) { }

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
  	let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

  	return this.http
      .get(this.BASE_URL + params)
      .map(response => response.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }
}
