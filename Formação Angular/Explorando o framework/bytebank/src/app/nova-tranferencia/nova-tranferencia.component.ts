import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['nova-tranferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova tranferência!');
    console.log(`Valor: ${this.valor}\nDestino: ${this.destino}`);
  }
}
