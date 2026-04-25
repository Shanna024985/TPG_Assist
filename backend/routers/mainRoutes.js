
let router = require("express").Router()
let registrationRouter = require("./authRoute")
router.get("/",(req,res,next)=>{
    res.send("You are connected!")
})
router.use("/auth",registrationRouter)
router.use("/images",require("./imageRoute"))
module.exports = router
