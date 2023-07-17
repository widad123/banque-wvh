import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';



@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = "http://localhost:8080/api/service-banque/selectCompte";

  constructor(private http:HttpClient) {}

  
 getAccounts(utilisateurId: number){
  const params= new HttpParams()
              .set('unUtilisateurId',1)
  return this.http.post<Account[]>(this.baseUrl,null,{params});
 }

}
