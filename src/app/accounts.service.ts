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
        .set("unLogin",unLogin.toString())
        .set("unMdp",unMdp.toString())
  return this.http.post<number>(`${this.baseUrl}/authentifier`,null,{params});
}  

  
 getAccounts(unUtilisateurId: number){
  const params= new HttpParams()
              .set("unUtilisateurId",unUtilisateurId.toString())
  return this.http.post<Account[]>(`${this.baseUrl}/selectCompte`,null,{params});
 }

 
 getOperations(unUtilisateurId: number,unCompteId : number,dateDeb : string,dateFin : string,creditDebit : boolean): Observable<Operation[]> {
  const params= new HttpParams()
              .set('unUtilisateurId',unUtilisateurId.toString())
              .set('unCompteId',unCompteId.toString())
              .set('dateDeb',dateDeb.toString())
              .set('dateFin',dateFin.toString())
              .set('creditDebit',creditDebit.toString())

  return this.http.post<Operation[]>(`${this.baseUrl}/selectOperation`,null,{params});
 }

 getAllOperations(unUtilisateurId:number,unCompteId:number){
  const params= new HttpParams()
                .set('unUtilisateurId',unUtilisateurId.toString())
                .set('unCompteId',unCompteId.toString())
 return this.http.post<Operation[]>(`${this.baseUrl}/allOperations`,null,{params})
 }


validerVirement(unUtilisateurId:number,unCompteIdSrc:number,unCompteIdDst:number,unMontant:number): Observable<Operation[]> {
  const params = new HttpParams()
                .set("unUtilisateurId",unUtilisateurId.toString())
                .set("unCompteIdSrc",unCompteIdSrc.toString())
                .set("unCompteIdDst",unCompteIdDst.toString())
                .set("unMontant",unMontant.toString())
  return this.http.post<Operation[]>(`${this.baseUrl}/doVirement`,null,{params});
}

}
