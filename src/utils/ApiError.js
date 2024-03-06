class ApiError extends Error {
  constructor(
    statusCode,
    mesage = "Something went wrog",
    errors = [],
    stack = ""
  ) {
    super(mesage);
    this.statusCode = statusCode;
    this.data = null;
    this.message = mesage;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export {ApiError}