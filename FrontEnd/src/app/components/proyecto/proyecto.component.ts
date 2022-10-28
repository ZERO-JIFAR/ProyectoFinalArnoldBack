import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: Proyecto[]=[];
  isLogged = false;
  
    constructor(public servProy: ProyectoService, private tokenService:TokenService) { }
  
    ngOnInit(): void {
      this.cargarProyectos();
    }
   
    cargarProyectos(): void{
      this.servProy.getProyectos().subscribe(data => {this.proyectos=data});
    }
  
  }
