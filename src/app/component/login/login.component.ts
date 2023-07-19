// import { Component ,Input } from '@angular/core';
// import { AccountsService } from 'src/app/accounts.service';
// import { LoginService } from 'src/app/services/login.service';
// import { Router } from '@angular/router';
// import { Account } from 'src/app/account';




// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//    accounts!: Account[];
//   unLogin!: string;
//   unMdp!: string;
//   @Input()unUtilisateurId !: number;
//   constructor(private loginService: LoginService, private router: Router ,private acs:AccountsService ) {}
  
//   authentifier(){ 
//     console.log(this.acs.authentifier(this.unLogin,this.unMdp));
//    return this.acs.authentifier(this.unLogin,this.unMdp).subscribe({
//     next:id=>{ 
//       this.unUtilisateurId = id;
//       this.router.navigate(['/accounts']);
      
//       console.log(this.unUtilisateurId);
//      },
//     error:error=>{
//       console.log(error);
//     }
//    });
//   }
//   // authentifier() {
//   //   this.acs.authentifier(this.unLogin, this.unMdp).subscribe(
//   //     (id: number) => {
//   //       this.unUtilisateurId = id;
//   //       this.router.navigate(['/accounts'], { state: { unUtilisateurId: id } });
//   //     },
//   //     (error: any) => {
//   //       console.log(error);
//   //     }
//   //   );
//   // }
 
//   }
 

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts.service';
import { Account } from 'src/app/account';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() accounts!: Account[];
  unLogin!: string;
  unMdp!: string;
  unUtilisateurId!: number;
  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private acs: AccountsService
  ) {}

  authentifier() {
    this.acs.authentifier(this.unLogin, this.unMdp ).subscribe({
      next: (id: number) => {
        this.unUtilisateurId = id;
        this.onLogin.emit();
        this.router.navigate(['/accounts'], { queryParams: { userId: this.unUtilisateurId } });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  logout() {
    this.onLogout.emit();
  }
  
}
