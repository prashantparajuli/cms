const { check } = require("express-validator");

let loginValidator = [
    check("email", "Invalid value for email")
    .isLength({ min: 1 }).withMessage("Email is required")
    .isLength({ max: 100 }).withMessage("Email can't exceed 100 characters").isEmail().trim().escape(),
    check("password")
    .isLength({ min: 1 }).withMessage("Password is required")
    .isLength({ max: 16 }).withMessage("Password must not exceed 16 characters").trim().escape()
];

module.exports = { loginValidator };