export class appError extends Error{
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode
        this.isOperational = true; // Custom property to distinguish operational errors
        Error.captureStackTrace(this, this.constructor);
    }
}