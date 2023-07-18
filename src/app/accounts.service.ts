import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { Operation } from './operation';
import {NgForm} from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = "http://localhost:8080/api/service-banque";

  constructor(private http:HttpClient) {}

  
 getAccounts(utilisateurId: number){
  const params= new HttpParams()
              .set('unUtilisateurId',1)
  return this.http.post<Account[]>(`${this.baseUrl}/selectCompte`,null,{params});
 }
 
 getOperations(unUtilisateurId: number,unCompteId : number,dateDeb : string,dateFin : string,creditDebit : boolean){
  const params= new HttpParams()
              .set('unUtilisateurId',1)
              .set('unCompteId',15)
              .set('dateDeb',dateDeb)
              .set('dateFin',dateFin)
              .set('creditDebit',creditDebit)

  return this.http.post<Operation[]>(`${this.baseUrl}/selectOperation`,null,{params});
 }

}
