import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-nueva-skill',
  templateUrl: './form-nueva-skill.component.html',
  styleUrls: ['./form-nueva-skill.component.css']
})
export class FormNuevaSkillComponent implements OnInit {
skill!:Skill;
  constructor(private servSkill: SkillService, private router: Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
  }

  onCreate(porcentaje: string, url:string):void{
    this.skill = new Skill(0,"");
    this.skill.porcentaje= parseInt(porcentaje,10);
    this.skill.urlImg = url;
    this.servSkill.save(this.skill).subscribe();
    alert("La skill fue creada correctamente");
    this.router.navigate(['/edicion']);
  }
}
