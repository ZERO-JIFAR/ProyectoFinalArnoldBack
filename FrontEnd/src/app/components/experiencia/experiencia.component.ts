import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void{
    this.experienciaService.getExperiencias().subscribe(data => {this.experiencias=data})
  }

}
