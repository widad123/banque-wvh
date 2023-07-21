import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nab-bar',
  templateUrl: './nab-bar.component.html',
  styleUrls: ['./nab-bar.component.css']
})
export class NabBarComponent {
  isLoggedIn: boolean = false;
  showLogin: boolean = false;
  @Input() accounts!: Account[];

  constructor(private router: Router , private loginService : LoginService) { }
 
  // toggleLoginState() {
  //   const loginForm = document.getElementById('loginForm');
  //   if (loginForm) {
  //     this.showLogin = !this.showLogin;
  //     loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  //   }
  // }
  loginSuccessful(unUtilisateurId: number) {
    this.isLoggedIn = true;
    this.showLogin = false;
   
  }

  logoutSuccessful() {
    this.isLoggedIn = false;
    this.showLogin = false;
  }
  showLoginForm() {
    this.showLogin = true;
    this.isLoggedIn = false;
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
      }
    }

}
