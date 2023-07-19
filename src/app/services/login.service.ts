import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl = 'http://localhost:8080/api/service-banque';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<number> {
    const params = new HttpParams()
      .set('unLogin', username)
      .set('unMdp', password);
    return this.http.post<number>(`${this.baseUrl}/authentifier`,null, {params});
  }
}
