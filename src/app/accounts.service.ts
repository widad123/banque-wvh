import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { Operation } from './operation';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = "http://localhost:8080/api/service-banque";

  constructor(private http:HttpClient) {}

  authentifier(unLogin : string , unMdp : string){
    const params= new HttpParams()
        .set("unLogin",unLogin)
        .set("unMdp",unMdp)
  return this.http.post<number>(`${this.baseUrl}/authentifier`,null,{params});
}  

  
 getAccounts(unUtilisateurId: number){
  const params= new HttpParams()
              .set("unUtilisateurId",unUtilisateurId)
  
  return this.http.post<Account[]>(`${this.baseUrl}/selectCompte`,null,{params});
 }
 
 getOperations(unUtilisateurId: number,unCompteId : number,dateDeb : string,dateFin : string,creditDebit : boolean): Observable<Operation[]> {
  const params= new HttpParams()
              .set('unUtilisateurId',1)
              .set('unCompteId',15)
              .set('dateDeb',dateDeb)
              .set('dateFin',dateFin)
              .set('creditDebit',creditDebit)

  return this.http.post<Operation[]>(`${this.baseUrl}/selectOperation`,null,{params});
 }


validerVirement(unUtilisateurId:number,unCompteIdSrc:number,unCompteIdDst:number,unMontant:number): Observable<Operation[]> {
  const params = new HttpParams()
                .set("unUtilisateurId",unUtilisateurId.toString())
                .set("unCompteIdSrc",unCompteIdSrc.toString())
                .set("unCompteIdDst",unCompteIdDst.toString())
                .set("unMontant",unMontant.toString())
  console.log(unUtilisateurId,unCompteIdSrc,unCompteIdDst,unMontant);
  return this.http.post<Operation[]>(`${this.baseUrl}/doVirement`,null,{params});
}

}
