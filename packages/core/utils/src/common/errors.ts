/**
 * @typedef MedusaErrorType
 *
 */
export const MedusaErrorTypes = {
  /** Errors stemming from the database */
  DB_ERROR: "database_error",
  DUPLICATE_ERROR: "duplicate_error",
  INVALID_ARGUMENT: "invalid_argument",
  INVALID_DATA: "invalid_data",
  UNAUTHORIZED: "unauthorized",
  NOT_FOUND: "not_found",
  NOT_ALLOWED: "not_allowed",
  UNEXPECTED_STATE: "unexpected_state",
  CONFLICT: "conflict",
  UNKNOWN_MODULES: "unknown_modules",
  PAYMENT_AUTHORIZATION_ERROR: "payment_authorization_error",
  PAYMENT_REQUIRES_MORE_ERROR: "payment_requires_more_error",
}

export const MedusaErrorCodes = {
  INSUFFICIENT_INVENTORY: "insufficient_inventory",
  CART_INCOMPATIBLE_STATE: "cart_incompatible_state",
  UNKNOWN_MODULES: "unknown_modules",
}

/**
 * Standardized error to be used across Medusa project.
 * @extends Error
 */
export class MedusaError extends Error {
  // Symbol is not serializable
  __isMedusaError = true

  public type: string
  public message: string
  public code?: string
  public date: Date
  public static Types = MedusaErrorTypes
  public static Codes = MedusaErrorCodes

  /**
   * Creates a standardized error to be used across Medusa project.
   * @param {string} type - type of error
   * @param {string} message - message to go along with error
   * @param {string} code - code of error
   * @param {Array} params - params
   */
  constructor(type: string, message: string, code?: string, ...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MedusaError)
    }

    this.type = type
    this.code = code
    this.message = message
    this.date = new Date()
  }

  /**
   * Checks the object for the MedusaError type.
   */
  static isMedusaError(error: any): error is MedusaError {
    return !!error.__isMedusaError
  }
}
