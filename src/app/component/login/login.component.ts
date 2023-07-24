import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts.service';
import { Account } from 'src/app/account';
import { LoginService } from 'src/app/services/login.service';

/**
 * LoginComponent represents the login functionality of the application.
 * It handles user authentication and navigation to the accounts page.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Input property to receive accounts data from the parent component.
  @Input() accounts!: Account[];

  // Properties to store user login information.
  unLogin!: string;
  unMdp!: string;
  
  // Property to store the logged-in user's ID.
  unUtilisateurId!: number;
  
  // Output events to notify the parent component about login and logout actions.
  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private acs: AccountsService
  ) {}

  /**
   * This method attempts to authenticate the user using the provided login credentials.
   * If successful, it emits the 'onLogin' event and navigates to the accounts page.
   * If an error occurs during authentication, it logs the error to the console.
   */
  authentifier() {
    this.acs.authentifier(this.unLogin, this.unMdp).subscribe({
      next: (id: number) => {
        this.unUtilisateurId = id;
        this.onLogin.emit(); // Emit the login event to the parent component.
        this.router.navigate(['/accounts'], { queryParams: { userId: this.unUtilisateurId } });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  
  /**
   * This method is triggered when the user logs out of the application.
   * It emits the 'onLogout' event to notify the parent component about the logout action.
   */
  logout() {
    this.onLogout.emit(); // Emit the logout event to the parent component.
    this.router.navigate(['/']);
  }
}
