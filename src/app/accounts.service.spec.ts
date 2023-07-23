// Importing the necessary modules and classes for testing
import { TestBed } from '@angular/core/testing';

// Importing the service to be tested
import { AccountsService } from './accounts.service';

// Test suite for the AccountsService
describe('AccountsService', () => {
  let service: AccountsService;

  // Setting up the testing environment before each test case
  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Injecting the AccountsService to be tested
    service = TestBed.inject(AccountsService);
  });

  // Test case to check if the AccountsService is created successfully
  it('should be created', () => {
    // Expecting the service to be truthy (exists)
    expect(service).toBeTruthy();
  });
});
