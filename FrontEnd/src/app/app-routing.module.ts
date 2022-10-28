import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEdicionPerfilComponent } from './components/acerca-de/form-edicion-perfil/form-edicion-perfil.component';
import { EditionViewComponent } from './components/edition-view/edition-view.component';
import { FormEdicionEducacionComponent } from './components/educacion/form-edicion-educacion/form-edicion-educacion.component';
import { FormNuevaEducacionComponent } from './components/educacion/form-nueva-educacion/form-nueva-educacion.component';
import { FormEdicionExperienciaComponent } from './components/experiencia/form-edicion-experiencia/form-edicion-experiencia.component';
import { FormNuevaExperienciaComponent } from './components/experiencia/form-nueva-experiencia/form-nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { FormEdicionSkillsComponent } from './components/hys/form-edicion-skills/form-edicion-skills.component';
import { FormNuevaSkillComponent } from './components/hys/form-nueva-skill/form-nueva-skill.component';
import { LoginComponent } from './components/login/login.component';
import { FormEdicionProyectoComponent } from './components/proyecto/form-edicion-proyecto/form-edicion-proyecto.component';
import { FormNuevoProyectoComponent } from './components/proyecto/form-nuevo-proyecto/form-nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'edicion',component:EditionViewComponent},
  {path:'editar/educacion/:id',component:FormEdicionEducacionComponent},
  {path:'editar/experiencia/:id',component:FormEdicionExperienciaComponent},
  {path:'editar/skill/:id',component:FormEdicionSkillsComponent},
  {path:'editar/proyecto/:id',component:FormEdicionProyectoComponent},
  {path:'editar/perfil/:id',component:FormEdicionPerfilComponent},
  {path:'experiencia/crear',component:FormNuevaExperienciaComponent},
  {path:'educacion/crear',component:FormNuevaEducacionComponent},
  {path:'skill/crear',component:FormNuevaSkillComponent},
  {path:'proyectos/crear',component:FormNuevoProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
