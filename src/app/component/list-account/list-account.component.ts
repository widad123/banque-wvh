import { Component } from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent {
  accounts !: Account[];
  unUtilisateurId!:number;
  constructor(private acs : AccountsService,private route: ActivatedRoute){}

  getId(){
  this.route.queryParams.subscribe(params => {
    console.log(params['param']);
    return this.unUtilisateurId = params['param'];

  });
}
  
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
}
