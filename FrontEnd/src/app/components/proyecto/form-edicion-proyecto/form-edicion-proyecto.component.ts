import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { EducacionService } from 'src/app/service/educacion.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edicion-proyecto',
  templateUrl: './form-edicion-proyecto.component.html',
  styleUrls: ['./form-edicion-proyecto.component.css']
})
export class FormEdicionProyectoComponent implements OnInit {
 proyecto!: Proyecto;
  constructor(private tokenService:TokenService,private router:Router, private servProy :ProyectoService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.servProy.getProyecto(id).subscribe(
      data => {
        this.proyecto = data;
      
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    let titulo = document.getElementById('name') as HTMLInputElement;
    let descripcion = document.getElementById('message') as HTMLInputElement;
    this.proyecto.nombreProy= titulo.value;
    this.proyecto.descripcion = descripcion.value;
    this.servProy.update(this.proyecto).subscribe(
      data =>{
        this.router.navigate(['/edicion']);
      },err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
