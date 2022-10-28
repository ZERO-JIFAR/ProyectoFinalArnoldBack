import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edicion-perfil',
  templateUrl: './form-edicion-perfil.component.html',
  styleUrls: ['./form-edicion-perfil.component.css']
})
export class FormEdicionPerfilComponent implements OnInit {
persona!: Persona;
  constructor(private tokenService:TokenService,private router:Router, private activatedRouter: ActivatedRoute, private servPerfil: PersonaService) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
      this.servPerfil.getPersonas().subscribe(
        data => {
          this.persona = data;
        
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

    onUpdate():void{
      let nombre = document.getElementById('nombre') as HTMLInputElement;
      let descripcion = document.getElementById('descripcionPersona') as HTMLInputElement;
      let apellido = document.getElementById('apellido') as HTMLInputElement;
      let titulo = document.getElementById('titulo') as HTMLInputElement;
      let img = document.getElementById('img') as HTMLInputElement;
      this.persona.nombre = nombre.value
      this.persona.apellido = apellido.value;
      this.persona.titulo= titulo.value;
      this.persona.descripcion = descripcion.value;
      this.persona.img = img.value;
      this.servPerfil.update(this.persona).subscribe(
        data =>{
          this.router.navigate(['/edicion']);
        },err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }

  }
