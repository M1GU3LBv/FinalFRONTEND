export class NuevaPersona {
    nombres_pers : string;
    apellido_pat : string;
    apellido_mat : string;
    dni : string;
    correo : string;
    f_nacimiento : string;
    telefono : string;
    direccion : string;


    constructor (nombres_pers : string,apellido_pat : string ,apellido_mat : string ,dni : string, correo : string 
         ,f_nacimiento : string, telefono :string, direccion: string){
            this.nombres_pers = nombres_pers;
            this.apellido_pat = apellido_pat;
            this.apellido_mat = apellido_mat;
            this.dni = dni;
            this.correo = correo;
            this.f_nacimiento = f_nacimiento;
            this.telefono = telefono;
            this.direccion = direccion;
         }
}
