function sendDevError(err, res) {
    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}

function sendProdError(err, res) {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}
module.exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV == "dev") {
        sendDevError(err, res);
    } else {
        sendProdError(err, res);
    }
}