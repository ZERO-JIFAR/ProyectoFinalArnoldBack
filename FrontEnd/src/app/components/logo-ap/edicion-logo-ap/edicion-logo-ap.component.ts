import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edicion-logo-ap',
  templateUrl: './edicion-logo-ap.component.html',
  styleUrls: ['./edicion-logo-ap.component.css']
})
export class EdicionLogoApComponent implements OnInit {
  isLogged=false;
  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

  onLogOut(){
    this.tokenService.logOut();
    this.isLogged= false;
   
    this.router.navigate(['']);
  }

}