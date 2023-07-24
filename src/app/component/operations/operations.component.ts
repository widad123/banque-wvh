import { Component, OnInit } from '@angular/core';
import { AccountsService } from './../../accounts.service';
import { Operation } from 'src/app/operation';
import { formatDate } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  operations!: Operation[];
  unUtilisateurId!: number;
  unCompteId!: number;
  dateDeb!: Date;
  dateFin!: Date;
  creditDebit!: boolean;
  credit: boolean = false;
  debit: boolean = false;
  libelle!: string;

  constructor(private acs: AccountsService, private route: ActivatedRoute) { }

  // Helper method to format a date to the required format
  formaterDate(date: Date) {
    return formatDate(date, "yyyy-MM-dd'T'HH:mm:ss'Z'", 'fr-FR');
  }

  ngOnInit() {
    // Get user and account IDs from query parameters
    this.route.queryParams.subscribe(params => {
      this.unUtilisateurId = params['userId'];
      console.log(this.unUtilisateurId);
      this.unCompteId = params['unCompteId'];
      console.log(this.unCompteId);
      this.getAllOperations();
    });
  }

  // Event handler for the button click
  handleClick() {
    if (this.credit) {
      this.creditDebit = true;
    } else if (this.debit) {
      this.creditDebit = false;
    }
    console.log(this.creditDebit); // Display the state of the credit checkbox
    var dateDebut = this.formaterDate(this.dateDeb);
    console.log(dateDebut);
    var dateEnd = this.formaterDate(this.dateFin);

    // Fetch operations based on selected criteria
    this.getOperation(this.unUtilisateurId, this.unCompteId, dateDebut, dateEnd, this.creditDebit);
    this.operations = []; // Clear the existing operations array
  }

  // Fetch all operations for the given user and account IDs
  getAllOperations() {
    this.acs.getAllOperations(this.unUtilisateurId, this.unCompteId).subscribe({
      next: data => {
        this.operations = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  // Fetch operations based on selected criteria
  getOperation(unUtilisateurId: number, unCompteId: number, dateDeb: any, dateFin: any, creditDebit: boolean) {
    this.acs.getOperations(unUtilisateurId, unCompteId, dateDeb, dateFin, creditDebit).subscribe({
      next: data => {
        this.operations = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
