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
import { BodyComponent } from './component/body/body.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ListAccountComponent,
    LoginComponent,
    NabBarComponent,
    OperationsComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AccountsService,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
