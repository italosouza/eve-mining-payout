import { Component, OnInit }        from '@angular/core';
import { Sincronizar }              from '../models/sincronizar';

@Component({
  templateUrl: './sincronizar.component.html',
  styleUrls: ['./sincronizar.component.css']
})
export class SincronizarComponent implements OnInit {

  public objeto: Sincronizar;

  constructor() {
   }

  ngOnInit() {
     this.objeto = new Sincronizar();
     this.carregarDadosSessao();
  }

  private carregarDadosSessao(): void {
    let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
    if (dadosUsuario !== null) {
      this.objeto = dadosUsuario;
    }
  }

  private salvarDadosSessao(): void {
    if (this.objeto.dadosSalvos) {
      localStorage.setItem('dadosUsuario', JSON.stringify(this.objeto));
      console.log(JSON.parse(localStorage.getItem('dadosUsuario')));
    } else {
      localStorage.removeItem('dadosUsuario');
    }
  }

  public onSubmit(): void {
    this.salvarDadosSessao();
  }

}
