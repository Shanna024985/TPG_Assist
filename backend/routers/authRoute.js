let router = require("express").Router()
let controller = require("../controllers/authController")
let jwtmiddleware = require("../middleware/jwtmiddleware")
let bycryptmiddleware = require("../middleware/bcryptMiddleware")

router.post("/register",controller.validation, bycryptmiddleware.hashPassword,controller.createNewUser,jwtmiddleware.generateToken,jwtmiddleware.sendToken)
router.post("/login",controller.loginUser,bycryptmiddleware.comparePassword,jwtmiddleware.generateToken,jwtmiddleware.sendToken)

module.exports = router