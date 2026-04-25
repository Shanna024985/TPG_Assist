let model = require("../models/authModel")

module.exports.validation = (req, res, next) => {
    let regexForEmail = /^\w+@[a-zA-Z]+\.[a-zA-Z]+$/
    let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let regexForUsername = /^[a-zA-Z0-9]+$/
    if (regexForEmail.test(req.body.email) && regexForPassword.test(req.body.password) && regexForUsername.test(req.body.username)) {
        next()
    } else {
        res.status(500).json({ message: "Error" })
    }
}

module.exports.createNewUser = (req, res, next) => {
    return model.createNewUsers(req.body.username, req.body.email, res.locals.hash)
        .then((arrayOfUser) => {
            if (arrayOfUser[0].id) {
                res.locals.userId = arrayOfUser[0].id
                res.locals.username = arrayOfUser[0].username
                res.locals.role = arrayOfUser[0].role
                next()
            }
        }).catch(function (error) {
            console.error(error)
            return res.status(500).json({ error: error.message })
        })
}

module.exports.loginUser = (req, res, next) => {
    return model.getUserByEmail(req.body.email)
        .then((userdetails) => {
            if (userdetails[0]) {
                res.locals.userId = userdetails[0].id
                res.locals.username = userdetails[0].username
                res.locals.role = userdetails[0].role
                res.locals.hash = userdetails[0].password
                next()
            }
        }).catch(function(error){
            console.error(error)
            return res.status(500).json({error: error.message})
        })
}