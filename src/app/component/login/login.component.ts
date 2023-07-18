import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  login(): void {
    const apiUrl = 'http://localhost:8080/api/service-banque/authentifier';
    const formData = new FormData();
    formData.append('unLogin', this.username);
    formData.append('unMdp', this.password);

    this.http.post<number>(apiUrl, formData).subscribe(
      (userId: number) => {
        // Successful login, handle the response
        console.log('User ID:', userId);
        // Redirect or perform any other necessary actions
      },
      (error) => {
        // Error occurred during login, handle the error
        console.error('Login error:', error);
      }
    );
  }
}
