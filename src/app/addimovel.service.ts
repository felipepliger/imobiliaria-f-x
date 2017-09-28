import { Injectable } from '@angular/core';
import { NewImovel } from './shared/newimovel.model';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()

export class AddImovel {

    constructor(private http: Http) { }

    public addImovel(imovel: NewImovel): Observable<any> {

        let headers: Headers = new Headers()

        headers.append('Content-type', 'egeniusfounders2016')

        return this.http.post('http://demo1183916.mockable.io/anuncio', JSON.stringify(imovel), new RequestOptions({ headers: headers }))
    }
}
