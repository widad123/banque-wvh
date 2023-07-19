import { Component } from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent {
  accounts !: Account[];
  unUtilisateurId!:number;
  unMontant!:number;
  unCompteIdSrc!:number;
  unCompteIdDst!:number;
  constructor(private acs : AccountsService){}
  
  ngOnInit() {
  this.getAccount(this.unUtilisateurId);
  }

  getAccount(unUtilisateurId: number){
    this.acs.getAccounts(unUtilisateurId).subscribe({
      next: data => {
        this.accounts = data;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  validerVirement(){
    this.unUtilisateurId = 1; 
    console.log(this.unUtilisateurId.toString(),this.unCompteIdSrc,this.unCompteIdDst,this.unMontant);
    this.acs.validerVirement(this.unUtilisateurId,this.unCompteIdSrc,this.unCompteIdDst,this.unMontant).subscribe({})
  }
}
