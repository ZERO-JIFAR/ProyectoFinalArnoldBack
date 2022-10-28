import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edicion-skills',
  templateUrl: './form-edicion-skills.component.html',
  styleUrls: ['./form-edicion-skills.component.css']
})
export class FormEdicionSkillsComponent implements OnInit {
skill!:Skill;
  constructor(private tokenService:TokenService,private router:Router, private servSkill: SkillService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.servSkill.getSkill(id).subscribe(
      data => {
        this.skill = data;
      
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    let porcentaje = document.getElementById('porcentajeSkill') as HTMLInputElement;
    let url = document.getElementById('urlIMG') as HTMLInputElement;
    this.skill.porcentaje= parseInt(porcentaje.value,10);
    this.skill.urlImg = url.value;
    this.servSkill.update(this.skill).subscribe(
      data =>{
        this.router.navigate(['/edicion']);
      },err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}
