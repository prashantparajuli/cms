const { check } = require("express-validator");

let departmentValidator = [
    check("name", "Invalid value for department name")
    .isLength({ min: 1 }).withMessage("Department name is required")
    .isLength({ max: 100 }).withMessage("Department name can't exceed 100 characters").trim().escape(),
    check("info")
    .isLength({ min: 1 }).withMessage("information is required")
    .isLength({ max: 200 }).withMessage("information must not exceed 200 characters").trim().escape()
];

module.exports = { departmentValidator };