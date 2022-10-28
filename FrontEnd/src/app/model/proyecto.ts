export class Proyecto{
    id?: number
    descripcion:string;
    nombreProy: string;

    constructor(descripcion: string, nombreProy: string){
        this.descripcion=descripcion;
        this.nombreProy=nombreProy;
    }

}