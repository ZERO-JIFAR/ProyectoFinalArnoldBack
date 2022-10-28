import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url: String = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }
  
  public getAllEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+"traer");
  }

  public save(educacion: Educacion):Observable<any>{
       return this.http.post<any>(this.url + "crear", educacion);
  }

  public update(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.url}editar/${educacion.id}`, educacion);
  }

  public delete (id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}eliminar/${id}`);
  }

  public getEducacion(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.url}traer/${id}`);
  }
}