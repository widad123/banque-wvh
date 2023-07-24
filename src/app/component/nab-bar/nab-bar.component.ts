import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { LoginService } from 'src/app/services/login.service';

/**
 * NabBarComponent represents the navigation bar of the application.
 * It includes login/logout functionality and navigation links.
 */
@Component({
  selector: 'app-nab-bar',
  templateUrl: './nab-bar.component.html',
  styleUrls: ['./nab-bar.component.css']
})
export class NabBarComponent {
  // Property to keep track of the user's login state.
  isLoggedIn: boolean = false;
  
  // Property to control the visibility of the login form.
  showLogin: boolean = false;
  
  // Input property to receive accounts data from the parent component.
  @Input() accounts!: Account[];

  constructor(private router: Router , private loginService : LoginService) { }
 
  /**
   * This method is called when the login process is successful.
   * It sets 'isLoggedIn' to true and hides the login form.
   * @param unUtilisateurId - The ID of the authenticated user.
   */
  loginSuccessful(unUtilisateurId: number) {
    this.isLoggedIn = true;
    this.showLogin = false;
  }

  /**
   * This method is called when the logout process is successful.
   * It sets 'isLoggedIn' to false and hides the login form.
   */
  logoutSuccessful() {
    this.isLoggedIn = false;
    this.showLogin = false;
    this.router.navigate(['/']);
  }
// Function to handle logout
 logout() {
  // Your logout logic here
  // Set isLoggedIn to false after the user logs out
  this.isLoggedIn = false;
}
  /**
   * This method is triggered when the login link is clicked.
   * It shows the login form and sets 'isLoggedIn' to false.
   */
  showLoginForm() {
    this.showLogin = true;
    this.isLoggedIn = false;
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
      this.router.navigate(['/']);
    }
  }

  // @HostListener decorator to listen for events on the host element (not included in the provided code).
  // You can use it to implement additional behavior when needed.
}
