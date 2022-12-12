export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    apellido_pat: string;
    apellido_mat: string;
    email: string;
    password: string;
    constructor(nombre: string, nombreUsuario: string,apellido_pat: string,apellido_mat: string,email: string, password: string) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.apellido_pat = apellido_pat;
        this.apellido_mat = apellido_mat;
        this.email = email;
        this.password = password;
    }
}
