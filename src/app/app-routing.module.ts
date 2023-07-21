import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListAccountComponent } from './component/list-account/list-account.component';
import { OperationsComponent } from './component/operations/operations.component';
import { BodyComponent } from './component/body/body.component';
import {VirementComponent} from './component/virement/virement.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent   },
  { path: 'accounts', component: ListAccountComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'virement', component: VirementComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
