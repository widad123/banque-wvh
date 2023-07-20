import { Component ,OnInit } from '@angular/core';
import { AccountsService } from './../../accounts.service';
import { Operation } from 'src/app/operation';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit{
  operations !: Operation[];
  unUtilisateurId : number=1;
  unCompteId : number=12;
  dateDeb !: Date ;
  dateFin !: Date;
  creditDebit !:boolean;
  credit :boolean = false;
  debit :boolean = false;

  formaterDate(date:Date){
    return formatDate(date,"yyyy-MM-dd'T'HH:mm:ss'Z'",'fr-FR');
  }
  constructor(private acs : AccountsService){}

  ngOnInit() {
    this.getAllOperations();
  }
  
  handleClick(){
    if (this.credit) {
      this.creditDebit = true;
    } else if (this.debit) {
      this.creditDebit = false;
    } 
    console.log(this.creditDebit); // Affiche l'état de la première checkbox (Crédit)
    var dateDebut=this.formaterDate(this.dateDeb);
    console.log(dateDebut);
    var dateEnd=this.formaterDate(this.dateFin);
    this.getOperation(this.unUtilisateurId,this.unCompteId,dateDebut,dateEnd,this.creditDebit);
    this.operations=[];
  }

  getAllOperations(){
    this.acs.getAllOperations(this.unUtilisateurId,this.unCompteId).subscribe({
      next: data => {
        this.operations = data;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  getOperation(unUtilisateurId: number,unCompteId : number,dateDeb : any,dateFin : any,creditDebit : boolean){
    this.acs.getOperations(unUtilisateurId,unCompteId,dateDeb,dateFin,creditDebit).subscribe({
      next: data => {
        this.operations = data;
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
