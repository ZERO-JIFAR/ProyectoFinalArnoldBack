import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edicion-educacion',
  templateUrl: './form-edicion-educacion.component.html',
  styleUrls: ['./form-edicion-educacion.component.css']
})
export class FormEdicionEducacionComponent implements OnInit {
educacion!: Educacion;
  constructor(private tokenService:TokenService,private router:Router, private servEduc:EducacionService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEduc.getEducacion(id).subscribe(
      data => {
        this.educacion = data;
      
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    let titulo = document.getElementById('titulo') as HTMLInputElement;
    let descripcion = document.getElementById('descripcionEduc') as HTMLInputElement;
    let urlImg = document.getElementById('urlImg') as HTMLInputElement;
    this.educacion.titulo= titulo.value;
    this.educacion.descripcion = descripcion.value;
    this.educacion.urlImg = urlImg.value;
    this.servEduc.update(this.educacion).subscribe(
      data =>{
        this.router.navigate(['/edicion']);
      },err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}
