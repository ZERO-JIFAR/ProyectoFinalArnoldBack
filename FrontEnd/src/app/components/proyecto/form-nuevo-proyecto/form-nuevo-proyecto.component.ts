import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-form-nuevo-proyecto',
  templateUrl: './form-nuevo-proyecto.component.html',
  styleUrls: ['./form-nuevo-proyecto.component.css']
})
export class FormNuevoProyectoComponent implements OnInit {
proyecto!:Proyecto;
  constructor(private router:Router, private servProy :ProyectoService) { }

  ngOnInit(): void {
  }
  
  onCreate(nombre:string, descripcion:string):void{
    this.proyecto = new Proyecto("","");
    this.proyecto.nombreProy= nombre;
    this.proyecto.descripcion = descripcion;
    this.servProy.save(this.proyecto).subscribe();
    alert("El proyecto fue añadido correctamente");
    this.router.navigate(['/edicion']);
  }
}
