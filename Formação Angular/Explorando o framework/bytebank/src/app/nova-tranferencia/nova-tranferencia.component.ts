import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['nova-tranferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova tranferência!');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (res) => {
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (erro) => {
        console.error(erro);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
