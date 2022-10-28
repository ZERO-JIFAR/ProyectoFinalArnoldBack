import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {


  experiencias: Experiencia[] = [];
  constructor(public experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void{
    this.experienciaService.getExperiencias().subscribe(data => {this.experiencias=data})
  }

  editarExperiencia(educ:Experiencia):void{
    this.router.navigate(['/editar/experiencia']);
  }
  
  eliminarExperiencia(id?: number){
    if(confirm("¿Esta seguro que quiere eliminar esta experiencia laboral?")){
    this.experienciaService.delete(id!).subscribe();
    location.reload();
    }
  }
  crearExperiencia():void{
    this.router.navigate(['/experiencia/crear'])
  }

}
