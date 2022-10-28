export class Skill{
    id?:number;
    porcentaje:number;
    urlImg:string;

    constructor(porcentaje: number,urlImg: string){
        this.porcentaje=porcentaje;
        this.urlImg=urlImg;

    }

}