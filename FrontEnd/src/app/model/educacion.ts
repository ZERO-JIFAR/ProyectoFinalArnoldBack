export class Educacion{
    id?:number;
    titulo: string;
    descripcion: string;
    urlImg: string;
    
    constructor( titulo:string, descripcion:string,urlImg:string){
       
         this.descripcion=descripcion;
         this.titulo=titulo;
         this.urlImg=urlImg;
        
    }
 
 }