export class Solicitud {
  idos: number;
  estado: string;
  n_expediente: string;
  tipo: string;
  i_gob: string;
  f_gob: string;
  constructor(idos: number, estado: string, n_expediente: string, tipo: string, i_gob: string, f_gob: string) {
    this.idos = idos;
    this.estado = estado;
    this.n_expediente = n_expediente;
    this.tipo = tipo;
    this.i_gob = i_gob;
    this.f_gob = f_gob;
  }
}
