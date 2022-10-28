import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edition-view',
  templateUrl: './edition-view.component.html',
  styleUrls: ['./edition-view.component.css']
})
export class EditionViewComponent implements OnInit {

  constructor(private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate(['/login']);
    }
  }

}
