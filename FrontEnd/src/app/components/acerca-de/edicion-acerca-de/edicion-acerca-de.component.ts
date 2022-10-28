import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edicion-acerca-de',
  templateUrl: './edicion-acerca-de.component.html',
  styleUrls: ['./edicion-acerca-de.component.css']
})
export class EdicionAcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","","","");
  isLogged = false;
   constructor(public personaService: PersonaService,private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data =>{this.persona=data});

    }
  }


