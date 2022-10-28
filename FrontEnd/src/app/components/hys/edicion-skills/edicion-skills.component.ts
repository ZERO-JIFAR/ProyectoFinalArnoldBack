import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edicion-skills',
  templateUrl: './edicion-skills.component.html',
  styleUrls: ['./edicion-skills.component.css']
})
export class EdicionSkillsComponent implements OnInit {

  skills: Skill[]=[];
  isLogged = false;
  constructor(public servSkill: SkillService, private tokenService: TokenService,private router:Router) { }

  ngOnInit(): void {
    this.cargarSkills();
    
  }

  cargarSkills(): void{
    this.servSkill.getSkills().subscribe(data => {this.skills=data});
  }


  eliminarSkill(id?: number){
    if(confirm("¿Esta seguro que quiere eliminar esta skill?")){
    this.servSkill.delete(id!).subscribe();
    location.reload();
    }
  }

}
