export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: string;
}

// json-server --watch db.json
