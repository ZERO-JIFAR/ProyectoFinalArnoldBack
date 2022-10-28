
export class Experiencia{
    id?:number;
    puesto: string;
    descripcion: string;
    cantidadAnios: number;
 
    constructor(puesto: string, descripcion: string, cantidadAnios: number){
        
              this.cantidadAnios = cantidadAnios;
              this.descripcion=descripcion;
              this.puesto=puesto;
            
    }
    
 }