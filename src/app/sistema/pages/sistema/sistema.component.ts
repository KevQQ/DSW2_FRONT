import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  userLogged!: SocialUser;
  isLogged!: boolean;


  constructor(
    private authService: SocialAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(data => {
      this.userLogged = data;
      console.log(this.userLogged)
      this.isLogged = (this.userLogged != null);
    }
    );
  }

  logOut(): void {
    this.authService.signOut().then(
      data => {
        this.router.navigate(['/login']);
      }
    );
  }

}
