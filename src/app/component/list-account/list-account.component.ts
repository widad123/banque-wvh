// import { Component , Input} from '@angular/core';
// import { AccountsService } from '../../accounts.service';
// import { Account } from '../../account';

// @Component({
//   selector: 'app-list-account',
//   templateUrl: './list-account.component.html',
//   styleUrls: ['./list-account.component.css']
// })
// export class ListAccountComponent {
  
//   accounts!: Account[];
//   @Input() unUtilisateurId!:number;
 
//   constructor(private acs : AccountsService){}
  
//   ngOnInit() {
//   this.getAccount(this.unUtilisateurId);
//   }
 

//   getAccount(unUtilisateurId: number){
//     this.acs.getAccounts(unUtilisateurId).subscribe({
//       next: data => {
//         this.accounts = data;
//       },
//       error: error => {
//         console.log(error);
//       }
//     })
//   }
// }
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  @Input() userId!: number;
  unCompteId!: number;
  accounts: Account[] = [];

  constructor(private acs: AccountsService, private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      this.getAccount();
    });
  }

   // Méthode pour convertir des objets en chaîne JSON
   public convertToJSON(data: any): string {
    return JSON.stringify(data);
  }

  getAccount() {
    this.acs.getAccounts(this.userId).subscribe({
      next: (data: Account[]) => {
        this.accounts = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}

