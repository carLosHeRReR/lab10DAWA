export class Producto {

    _id?: string;
    codigoAlumno: string;
    nombre: string;
    codigoCarrera: string;
    campo: Number;
    fecha: Date;

    constructor(codigoAlumno:string ,nombre:string, codigoCarrera:string, campo: Number, fecha: Date){
        this.codigoAlumno = codigoAlumno;
        this.nombre = nombre;
        this.codigoCarrera = codigoCarrera;
        this.campo = campo;
        this.fecha = fecha;
    }

}