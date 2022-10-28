import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skill[]=[];
  isLogged = false;
  constructor(public servSkill: SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void{
    this.servSkill.getSkills().subscribe(data => {this.skills=data});
  }



}
