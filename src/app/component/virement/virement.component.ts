import { Component ,OnInit} from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit{
  accounts !: Account[];
  unUtilisateurId!:number;
  unMontant!:number;
  unCompteIdSrc:number = 0;
  unCompteIdDst:number = 0;
  unCompteId !:number;
  libelle !: string;
  isValid !: boolean;
  constructor(private acs : AccountsService,private route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this. unUtilisateurId = params['userId'];
      console.log(this.unUtilisateurId);
      this.accounts = JSON.parse(params['accounts']);
      console.log(this.accounts);
  });
  }
 
  validerVirement(){
    this.acs.validerVirement(this.unUtilisateurId,this.unCompteIdSrc,this.unCompteIdDst,this.unMontant).subscribe({})
    console.log(this.unUtilisateurId,this.unCompteIdSrc,this.unCompteIdDst,this.unMontant)
    this.isValid=true;
    this.unCompteIdSrc = 0;
    this.unCompteIdDst = 0 ;
    this.unMontant = 0;
  }
}
