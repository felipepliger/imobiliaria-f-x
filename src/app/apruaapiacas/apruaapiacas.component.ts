import { Component, OnInit } from '@angular/core';
import { ImoveisService } from '../imoveis.service';
import { Imoveis } from '../shared/imoveis.model';

@Component({
  selector: 'app-apruaapiacas',
  templateUrl: './apruaapiacas.component.html',
  styleUrls: ['./apruaapiacas.component.css'],
  providers: [ImoveisService]
})

export class ApruaapiacasComponent implements OnInit {

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
