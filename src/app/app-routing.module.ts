// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components for routing
import { LoginComponent } from './component/login/login.component';
import { ListAccountComponent } from './component/list-account/list-account.component';
import { OperationsComponent } from './component/operations/operations.component';
import { BodyComponent } from './component/body/body.component';
import { VirementComponent } from './component/virement/virement.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { FooterComponent } from './component/footer/footer.component';


// Define your routes using the Routes array
const routes: Routes = [
  // Default route, will load BodyComponent when the path is empty ('/')
  { path: '', component: BodyComponent },

  // Route for the LoginComponent
  { path: 'login', component: LoginComponent },


  // Route for the ListAccountComponent
  { path: 'accounts', component: ListAccountComponent },

  // Route for the OperationsComponent
  { path: 'operations', component: OperationsComponent },

  // Route for the VirementComponent
  { path: 'virement', component: VirementComponent },

  // Route for the conatctFormComponenet
  { path: 'contact', component: ContactFormComponent }

 
];

@NgModule({
  // Import the RouterModule and configure it with the defined routes using the forRoot() method
  imports: [RouterModule.forRoot(routes)],
  // Export the configured RouterModule so that it can be used in other modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
