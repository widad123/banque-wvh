import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  @Input() userId!: number; // Input property to receive the user ID from the parent component
  unCompteId!: number; // A variable to store the account ID (not used in the provided code)
  accounts: Account[] = []; // An array to store the user's accounts

  constructor(private acs: AccountsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId']; // Get the user ID from the query parameters
      this.getAccount(); // Call the method to get the user's accounts
    });
  }

  // Method to convert objects to JSON strings (not used in the provided code)
  public convertToJSON(data: any): string {
    return JSON.stringify(data);
  }

  getAccount() {
    this.acs.getAccounts(this.userId).subscribe({
      next: (data: Account[]) => {
        this.accounts = data; // Assign the retrieved account data to the 'accounts' array
      },
      error: (error: any) => {
        console.log(error); // Log any errors that occurred during the API call
      }
    });
  }
}
