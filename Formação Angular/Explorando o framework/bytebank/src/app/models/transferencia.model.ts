export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string;
  data?: string;
}

// json-server --watch db.json
