import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edicion-experiencia',
  templateUrl: './form-edicion-experiencia.component.html',
  styleUrls: ['./form-edicion-experiencia.component.css']
})
export class FormEdicionExperienciaComponent implements OnInit {
 experiencia!:Experiencia;
  constructor(private tokenService:TokenService,private router:Router, private activatedRouter:ActivatedRoute, private servExp: ExperienciaService) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExp.getExperiencia(id).subscribe(
      data => {
        this.experiencia = data;
      
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['/edicion']);
      }
    )
  }


  onUpdate():void{
    let anios = document.getElementById('aniosExp') as HTMLInputElement;
    let descripcion = document.getElementById('descripcionExp') as HTMLInputElement;
    let puesto = document.getElementById('puesto') as HTMLInputElement;
    this.experiencia.cantidadAnios= parseInt(anios.value,10);
    this.experiencia.descripcion = descripcion.value;
    this.experiencia.puesto = puesto.value;
    this.servExp.update(this.experiencia).subscribe(
      data =>{
        this.router.navigate(['/edicion']);
      },err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['/edicion']);
      }
    )
  }

}
