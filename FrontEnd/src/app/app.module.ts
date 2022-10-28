import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EdicionAcercaDeComponent } from './components/acerca-de/edicion-acerca-de/edicion-acerca-de.component';
import { EdicionEducacionComponent } from './components/educacion/edicion-educacion/edicion-educacion.component';
import { EdicionExperienciaComponent } from './components/experiencia/edicion-experiencia/edicion-experiencia.component';
import { EdicionSkillsComponent } from './components/hys/edicion-skills/edicion-skills.component';
import { EdicionProyectoComponent } from './components/proyecto/edicion-proyecto/edicion-proyecto.component';
import { EditionViewComponent } from './components/edition-view/edition-view.component';
import { FormsModule } from '@angular/forms';
import { EdicionLogoApComponent } from './components/logo-ap/edicion-logo-ap/edicion-logo-ap.component';
import { EdicionHeaderComponent } from './components/header/edicion-header/edicion-header.component';
import { FormEdicionEducacionComponent } from './components/educacion/form-edicion-educacion/form-edicion-educacion.component';
import { FormEdicionExperienciaComponent } from './components/experiencia/form-edicion-experiencia/form-edicion-experiencia.component';
import { FormEdicionSkillsComponent } from './components/hys/form-edicion-skills/form-edicion-skills.component';
import { FormEdicionProyectoComponent } from './components/proyecto/form-edicion-proyecto/form-edicion-proyecto.component';
import { FormEdicionPerfilComponent } from './components/acerca-de/form-edicion-perfil/form-edicion-perfil.component';
import { FormNuevaExperienciaComponent } from './components/experiencia/form-nueva-experiencia/form-nueva-experiencia.component';
import { FormNuevaEducacionComponent } from './components/educacion/form-nueva-educacion/form-nueva-educacion.component';
import { FormNuevaSkillComponent } from './components/hys/form-nueva-skill/form-nueva-skill.component';
import { FormNuevoProyectoComponent } from './components/proyecto/form-nuevo-proyecto/form-nuevo-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EdicionAcercaDeComponent,
    EdicionEducacionComponent,
    EdicionExperienciaComponent,
    EdicionSkillsComponent,
    EdicionProyectoComponent,
    EditionViewComponent,
    EdicionLogoApComponent,
    EdicionHeaderComponent,
    FormEdicionEducacionComponent,
    FormEdicionExperienciaComponent,
    FormEdicionSkillsComponent,
    FormEdicionProyectoComponent,
    FormEdicionPerfilComponent,
    FormNuevaExperienciaComponent,
    FormNuevaEducacionComponent,
    FormNuevaSkillComponent,
    FormNuevoProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
