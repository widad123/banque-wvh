// This class represents an Account entity.
export class Account {
    // Unique identifier for the account.
    id!: number;

    // The label or name of the account.
    libelle!: string;

    // The current balance of the account.
    solde!: number;

    // The allowed overdraft for the account (if applicable).
    decouvert!: number;

    // The interest rate associated with the account (if applicable).
    taux!: number;

    // The unique identifier of the user to whom this account belongs.
    unUtilisateurId!: number;
}
