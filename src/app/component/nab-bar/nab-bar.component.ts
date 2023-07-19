import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nab-bar',
  templateUrl: './nab-bar.component.html',
  styleUrls: ['./nab-bar.component.css']
})
export class NabBarComponent {
  showLogin = false;
  isLoggedIn = false;

  constructor(private router: Router , private loginService : LoginService) { }
 
  toggleLoginState() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      this.showLogin = !this.showLogin;
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  // showLoginForm() {
  
  //   this.showLogin = true;
  //   const loginForm = document.getElementById('loginForm');
  //   if (loginForm) {
  //     loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  //   }
  // }
  loginSuccessful() {
    this.showLogin = false;
    this.isLoggedIn = true;
    this.router.navigate(['/accounts']);
  }

  logoutSuccessful() {
    this.showLogin = false;
    this.isLoggedIn = false;
  }
}
