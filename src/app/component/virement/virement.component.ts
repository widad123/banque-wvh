// Import necessary modules and components
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  // Declare class properties
  accounts!: Account[];
  unUtilisateurId!: number;
  unMontant!: number;
  unCompteIdSrc: number = 0;
  unCompteIdDst: number = 0;
  unCompteId!: number;
  libelle!: string;
  isValid!: boolean;

  constructor(private acs: AccountsService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to the route query parameters to fetch data
    this.route.queryParams.subscribe(params => {
      this.unUtilisateurId = params['userId']; // Get the 'userId' parameter from the query
      console.log(this.unUtilisateurId);
      this.accounts = JSON.parse(params['accounts']); // Parse and get the 'accounts' parameter from the query
      console.log(this.accounts);
    });
  }

  // Function to validate the transfer
  validerVirement() {
    // Call the 'validerVirement' method from the 'acs' (AccountsService) with necessary parameters
    this.acs
      .validerVirement(
        this.unUtilisateurId,
        this.unCompteIdSrc,
        this.unCompteIdDst,
        this.unMontant
      )
      .subscribe({}); // Subscribe to the observable response, you might want to handle it appropriately

    console.log(
      this.unUtilisateurId,
      this.unCompteIdSrc,
      this.unCompteIdDst,
      this.unMontant
    );

    this.isValid = true; // Set 'isValid' to true (assuming this is used for validation handling)
    this.unCompteIdSrc = 0; // Reset the source account ID
    this.unCompteIdDst = 0; // Reset the destination account ID
    this.unMontant = 0; // Reset the amount
  }
}
