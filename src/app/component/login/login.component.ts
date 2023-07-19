import { Component } from '@angular/core';
import { AccountsService } from './../../accounts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  unLogin!: string;
  unMdp!: string;
  unUtilisateurId!:number;

  constructor(private acs : AccountsService,private router: Router) {}

  authentifier(){
    console.log(this.acs.authentifier(this.unLogin,this.unMdp));
   return this.acs.authentifier(this.unLogin,this.unMdp).subscribe({
    next:id=>{ 
      this.unUtilisateurId = id;
      console.log(this.unUtilisateurId);
     },
    error:error=>{
      console.log(error);
    }
   });
  }

  navigateToDestination() {
  const param =  this.unUtilisateurId;
  this.router.navigate(['../list-account/list-account.component.ts'], { queryParams: { param } });
  }

}
