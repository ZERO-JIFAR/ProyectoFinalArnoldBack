import { Component, OnInit } from '@angular/core';
import { Persona} from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","","","");
  isLogged = false;
   constructor(public personaService: PersonaService,private tokenService:TokenService) { }
 
   ngOnInit(): void {
     this.personaService.getPersonas().subscribe(data =>{this.persona=data});
   }
 
 }
