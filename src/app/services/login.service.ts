// Import necessary modules from Angular
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Define the base URL for API requests
  private baseUrl = 'http://localhost:8080/api/service-banque';

  constructor(private http: HttpClient) {}

  // Method to authenticate user using provided username and password
  // Returns an Observable that emits the authentication status as a number
  authenticate(username: string, password: string): Observable<number> {
    // Create HttpParams object to send username and password as URL parameters
    const params = new HttpParams()
      .set('unLogin', username)
      .set('unMdp', password);
      
    // Send a POST request to the authentication endpoint with the provided parameters
    // The response will be a number representing the authentication status
    return this.http.post<number>(`${this.baseUrl}/authentifier`, null, { params });
  }

}
