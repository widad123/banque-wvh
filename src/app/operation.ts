/**
 * The Operation class represents a financial transaction operation.
 * It contains information about the operation ID, associated account ID, amount, date, and label.
 */
export class Operation {
  /**
   * The unique identifier for the operation.
   */
  id!: number;

  /**
   * The ID of the account associated with this operation.
   */
  compteId!: number;

  /**
   * The amount of money involved in the operation.
   */
  montant!: number;

  /**
   * The date when the operation occurred.
   * This is represented as a string in the format "YYYY-MM-DD".
   */
  date!: string;

  /**
   * A descriptive label or name for the operation.
   */
  libelle!: string;
}
