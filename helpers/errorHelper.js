module.exports = {
    wrapAsync: (fn) => {
        return (req, res, next) => {
            fn(req, res, next).catch((err) => {
                console.log(err);
                return next(err)
            });
        }
    },
    CustomError: class CustomError extends Error {
        constructor(message, statusCode) {
            super(message);
            this.statusCode = statusCode;
            this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
            this.isOperational = true;

            Error.captureStackTrace(this, this.constructor);
        }
    }
}