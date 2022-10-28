import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { FormEdicionEducacionComponent } from '../form-edicion-educacion/form-edicion-educacion.component';

@Component({
  selector: 'app-edicion-educacion',
  templateUrl: './edicion-educacion.component.html',
  styleUrls: ['./edicion-educacion.component.css']
})
export class EdicionEducacionComponent implements OnInit {

  estudios: Educacion[]=[];
  isLogged = false;


 constructor(public servEduc: EducacionService, private tokenService:TokenService, private router:Router) { }

 ngOnInit(): void {
   this.cargarEducacion();
}

cargarEducacion():void{
 this.servEduc.getAllEducacion().subscribe(data => {this.estudios=data});
}

editarEducacion(educ:Educacion):void{
  console.log(educ.titulo+''+educ.descripcion);
  this.router.navigate(['/editar/educacion']);
  
}

eliminarEducacion(id?: number){
  if(confirm("¿Esta seguro que quiere eliminar esta Educacion?")){
  this.servEduc.delete(id!).subscribe();
  location.reload();
  }
}

}



