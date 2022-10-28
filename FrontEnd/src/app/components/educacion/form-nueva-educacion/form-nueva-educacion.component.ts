import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-form-nueva-educacion',
  templateUrl: './form-nueva-educacion.component.html',
  styleUrls: ['./form-nueva-educacion.component.css']
})
export class FormNuevaEducacionComponent implements OnInit {
educacion!: Educacion;
  constructor(private servEduc:EducacionService, private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
  }
  onCreate(titulo: string, urlImg: string, descripcion: string):void{
    this.educacion = new Educacion("","","");
    this.educacion.titulo = titulo;
    this.educacion.urlImg = urlImg;
    this.educacion.descripcion = descripcion;
    this.servEduc.save(this.educacion).subscribe();
    alert("La educacion fue creada correctamente");
    this.router.navigate(['/edicion']);
  }

}
