const { check } = require("express-validator");

let projectValidator = [
    check("name", "Invalid value for project name")
    .isLength({ min: 1 }).withMessage("Project name is required")
    .isLength({ max: 100 }).withMessage("Project name can't exceed 100 characters").trim().escape(),
    check("description")
    .isLength({ min: 1 }).withMessage("description is required")
    .isLength({ max: 200 }).withMessage("description must not exceed 200 characters").trim().escape()
];

module.exports = { projectValidator };