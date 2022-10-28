import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edicion-proyecto',
  templateUrl: './edicion-proyecto.component.html',
  styleUrls: ['./edicion-proyecto.component.css']
})
export class EdicionProyectoComponent implements OnInit {

  proyectos: Proyecto[]=[];
  isLogged = false;
  
    constructor(public servProy: ProyectoService, private tokenService:TokenService, private router:Router) { }
  
    ngOnInit(): void {
      this.cargarProyectos();
    }
   
    cargarProyectos(): void{
      this.servProy.getProyectos().subscribe(data => {this.proyectos=data});
    }


  eliminarProyecto(id?: number){
    if(confirm("¿Esta seguro que quiere eliminar este proyecto?")){
    this.servProy.delete(id!).subscribe();
    location.reload();
    }
  }
  }