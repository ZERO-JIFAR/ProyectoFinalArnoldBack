import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Skill } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url: String = 'http://localhost:8080/skills/';

  constructor(private http: HttpClient) { }

  public getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+"traer");
  }

  
  public save(skill: Skill):Observable<any>{
    return this.http.post<any>(this.url + "crear", skill);
}

public update(skill:Skill):Observable<Skill>{
 return this.http.put<Skill>(`${this.url}editar/${skill.id}`, skill);
}


public delete (id:number): Observable<any>{
 return this.http.delete<any>(`${this.url}borrar/${id}`);
}
public getSkill(id:number):Observable<Skill>{
  return this.http.get<Skill>(`${this.url}traer/${id}`);
}

}
