import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
