import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-nueva-experiencia',
  templateUrl: './form-nueva-experiencia.component.html',
  styleUrls: ['./form-nueva-experiencia.component.css']
})
export class FormNuevaExperienciaComponent implements OnInit {
experiencia!:Experiencia;
  constructor(private servExp: ExperienciaService, private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
  }

  onCreate(puesto: string, cantidadAnios: string, descripcion: string):void{
    console.log(puesto + descripcion + cantidadAnios);
    this.experiencia = new Experiencia("","",0);
    this.experiencia.puesto = puesto;
    this.experiencia.descripcion = descripcion;
    this.experiencia.cantidadAnios = parseInt(cantidadAnios,10);
    this.servExp.save(this.experiencia).subscribe();
    alert("La experiencia fue creada correctamente");
    this.router.navigate(['/edicion']);
      
    
  
  }
}
