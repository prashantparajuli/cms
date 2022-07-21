const { validationResult } = require("express-validator");

const checkErrors = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors = errors.errors;
        let allErrors = {};
        errors.forEach(err => {
            allErrors[err.param] = err.msg;
        })
        return res.status(400).json({
            status: 'fail',
            message: allErrors
        })
    }
    next();
}

module.exports.checkErrors = checkErrors;