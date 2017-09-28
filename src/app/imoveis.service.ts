import { Injectable } from '@angular/core';
import { Imoveis } from './shared/imoveis.model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ImoveisService {

  constructor(private http: Http) { }

  public getImoveis(): Promise<Imoveis[]> {
    return this.http.get('http://demo1183916.mockable.io/anuncio')
      .toPromise()
      .then((resolve: any) => resolve.json())
  }
}
