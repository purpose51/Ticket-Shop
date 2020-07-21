import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidatonError extends CustomError {
  statusCode = 400
  constructor(public errors: ValidationError[]) {
    super('Invalid Request Parameters');

    // Only  because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidatonError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err: any)=> {
      return { message: err.msg, field: err.param }
    })
  }
}

// alternative for constructor(private errors: ValidationError)
// export class RequestValidatonError extends Error {
//   errors: ValidationError
//   constructor(errors: ValidationError) {
//     this.errors = errors
//   }
// }



// alternative
// import { ValidationError } from 'express-validator';

// interface CustomError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string
//     field?: string
//   }[]
// }

// export class RequestValidatonError extends Error implements CustomError {
//   statusCode = 400
//   constructor(public errors: ValidationError[]) {
//     super();

//     // Only  because we are extending a built in class
//     Object.setPrototypeOf(this, RequestValidatonError.prototype)
//   }

//   serializeErrors() {
//     return this.errors.map((err: any)=> {
//       return { message: err.msg, field: err.param }
//     })
//   }
// }