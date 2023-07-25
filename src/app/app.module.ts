// Import Angular modules and components
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAccountComponent } from './component/list-account/list-account.component';
import { LoginComponent } from './component/login/login.component';
import { NabBarComponent } from './component/nab-bar/nab-bar.component';
import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './component/operations/operations.component';
import { AccountsService } from './accounts.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FooterComponent } from './component/footer/footer.component';
import { VirementComponent } from './component/virement/virement.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';

import { BodyComponent } from './component/body/body.component';

// Register French locale for formatting dates, numbers, etc.
registerLocaleData(localeFr);

@NgModule({
  // Declare all components used in the application
  declarations: [
    AppComponent,
    ListAccountComponent,
    LoginComponent,
    NabBarComponent,
    OperationsComponent,
    VirementComponent,
    FooterComponent,
    ContactFormComponent,
    BodyComponent
  ],

  // Import necessary Angular modules for the application
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  // Provide services that will be shared across the application
  providers: [
    AccountsService,
    { provide: LOCALE_ID, useValue: 'fr-FR'} // Set the locale to French for the app
  ],

  // Define the root component that will bootstrap the application
  bootstrap: [AppComponent]
})
export class AppModule { }
