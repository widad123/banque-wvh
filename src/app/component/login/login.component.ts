import { Component } from '@angular/core';
import { AccountsService } from './../../accounts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  unLogin!: string;
  unMdp!: string;
  unUtilisateurId!:number;

  constructor(private acs : AccountsService) {}

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
 
}
