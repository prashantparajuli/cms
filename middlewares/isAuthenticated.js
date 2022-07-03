exports.checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect("/login")
}
exports.checkLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/dashboard")
    }
    next()
}