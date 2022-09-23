import { Comentario } from './comentario';
import { type } from 'os';

export interface Comentario {
  date: Date;
  text: string;
  userName: string;
}

export type Comentarios = Array<Comentario>;
