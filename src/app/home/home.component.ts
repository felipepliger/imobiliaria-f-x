import { Component, OnInit } from '@angular/core';
import { ImoveisService } from '../imoveis.service';
import { Imoveis } from '../shared/imoveis.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ImoveisService]
})

export class HomeComponent implements OnInit {

  public ofertas: Imoveis[] = []

  constructor(private imoveisService: ImoveisService) { }

  ngOnInit() {
    this.imoveisService.getImoveis()
      .then((ofertas: Imoveis[]) => {
        this.ofertas = ofertas
      })
      .catch((param: any) => {
        console.log(param)
      })
  }

}
