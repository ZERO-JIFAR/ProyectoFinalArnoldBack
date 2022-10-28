import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from '../model/jwt-response';
import { LoginRequest } from '../model/loginRequest';
import { SignupRequest } from '../model/signupRequest';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authURL = 'http://localhost:8080/api/auth/'
    constructor(private httpClient: HttpClient) { }


    public nuevo(nuevoUsuario: SignupRequest): Observable<any> {
        return this.httpClient.post<any>(this.authURL + 'signup', nuevoUsuario);
    }

    public login(loginUsuario: LoginRequest): Observable<JwtResponse> {
        return this.httpClient.post<JwtResponse>(this.authURL + 'signin', loginUsuario);
    }
}
