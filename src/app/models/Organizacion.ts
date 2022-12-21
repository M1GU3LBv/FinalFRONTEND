export class Organizacion {
  idparametro_zona: string;
  nombre_os: string;
  estado: string;
  idparametro_nivel: string;
  idparametro_tipo_os: string;

  constructor(idparametro_zona: string, nombre_os: string, estado: string, idparametro_nivel: string, idparametro_tipo_os: string) {
    this.idparametro_zona = idparametro_zona;
    this.nombre_os = nombre_os;
    this.estado = estado;
    this.idparametro_nivel = idparametro_nivel;
    this.idparametro_tipo_os = idparametro_tipo_os;
  }

}
