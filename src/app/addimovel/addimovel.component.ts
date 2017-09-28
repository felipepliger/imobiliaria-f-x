import { Component, OnInit } from '@angular/core';
import { AddImovel } from '../addimovel.service';
import { NewImovel } from '../shared/newimovel.model';

@Component({
  selector: 'app-addimovel',
  templateUrl: './addimovel.component.html',
  styleUrls: ['./addimovel.component.css'],
  providers: [ AddImovel ]
})

export class AddimovelComponent implements OnInit {

  public imovel: NewImovel = new NewImovel()

  public titulo: string = ''
  public endereco: string = ''
  public tipo: string = ''
  public contato: string = ''
  public valor: string = ''
  public imagem: string = ''
  public descricao: string = ''

  constructor(private addImovel: AddImovel) { }

  ngOnInit() {

  }

  public atualizaTitulo(titulo: string): void {
    this.titulo = titulo
  }
  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
  }
  public atualizaTipo(tipo: string): void {
    this.tipo = tipo
  }
  public atualizaContato(contato: string): void {
    this.contato = contato
  }
  public atualizaValor(valor: string): void {
    this.valor = valor
  }
  public atualizaImagen(imagem: string): void {
    this.imagem = imagem
  }
  public atualizaDescricao(descricao: string): void {
    this.descricao = descricao
  }

  public enviarImovel():void {
    this.imovel.name = this.titulo
    this.imovel.address = this.endereco
    this.imovel.type = this.tipo
    this.imovel.contact = this.contato
    this.imovel.value = this.valor
    this.imovel.imagesurl = this.imagem
    this.imovel.description = this.descricao

    this.addImovel.addImovel(this.imovel)
    .subscribe()
  }
}
