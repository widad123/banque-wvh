// Import required modules from Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import custom classes
import { Account } from './account';
import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = "http://localhost:8080/api/service-banque";

  constructor(private http: HttpClient) { }

  // Method to authenticate a user
  authentifier(unLogin: string, unMdp: string) {
    const params = new HttpParams()
      .set("unLogin", unLogin)
      .set("unMdp", unMdp);

    // Sending a POST request to the server for authentication
    return this.http.post<number>(`${this.baseUrl}/authentifier`, null, { params });
  }

  // Method to get accounts for a user
  getAccounts(unUtilisateurId: number) {
    const params = new HttpParams()
      .set("unUtilisateurId", unUtilisateurId.toString());

    // Sending a POST request to the server to retrieve user accounts
    return this.http.post<Account[]>(`${this.baseUrl}/selectCompte`, null, { params });
  }

  // Method to get operations for an account within a date range
  getOperations(unUtilisateurId: number, unCompteId: number, dateDeb: string, dateFin: string, creditDebit: boolean): Observable<Operation[]> {
    const params = new HttpParams()
      .set('unUtilisateurId', unUtilisateurId.toString())
      .set('unCompteId', unCompteId.toString())
      .set('dateDeb', dateDeb.toString())
      .set('dateFin', dateFin.toString())
      .set('creditDebit', creditDebit.toString());

    // Sending a POST request to the server to retrieve account operations
    return this.http.post<Operation[]>(`${this.baseUrl}/selectOperation`, null, { params });
  }

  // Method to get all operations for an account
  getAllOperations(unUtilisateurId: number, unCompteId: number) {
    console.log('unUtilisateurId:', unUtilisateurId);
    console.log('unCompteId:', unCompteId);

    const params = new HttpParams()
      .set('unUtilisateurId', unUtilisateurId.toString())
      .set('unCompteId', unCompteId.toString());

    // Sending a POST request to the server to retrieve all account operations
    return this.http.post<Operation[]>(`${this.baseUrl}/allOperations`, null, { params });
  }

  // Method to validate a fund transfer (virement)
  validerVirement(unUtilisateurId: number, unCompteIdSrc: number, unCompteIdDst: number, unMontant: number): Observable<Operation[]> {
    const params = new HttpParams()
      .set("unUtilisateurId", unUtilisateurId.toString())
      .set("unCompteIdSrc", unCompteIdSrc.toString())
      .set("unCompteIdDst", unCompteIdDst.toString())
      .set("unMontant", unMontant.toString());

    console.log(unUtilisateurId, unCompteIdSrc, unCompteIdDst, unMontant);

    // Sending a POST request to the server to perform a fund transfer
    return this.http.post<Operation[]>(`${this.baseUrl}/doVirement`, null, { params });
  }

}
