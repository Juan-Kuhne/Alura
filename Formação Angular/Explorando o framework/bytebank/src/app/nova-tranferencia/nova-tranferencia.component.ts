import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['nova-tranferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  transferir() {
    console.log('Solicitada nova tranferência!');
  }
}
