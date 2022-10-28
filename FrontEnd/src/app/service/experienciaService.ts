import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Experiencia } from '../model/Experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: String =  'http://localhost:8080/experiencias/';

  constructor(private http: HttpClient) {}

  public getExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"traer");
  }

  public save(experiencia: Experiencia):Observable<any>{
       return this.http.post<any>(this.url + "crear", experiencia);
  }

public update(exp: Experiencia):Observable<Experiencia>{
  return this.http.put<Experiencia>(`${this.url}editar/${exp.id}`,exp);

}

  public delete (id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}eliminar/${id}`);
  }

  public getExperiencia(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.url}traer/${id}`);
  }
  
}