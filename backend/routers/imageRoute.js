let router = require("express").Router()

let controller = require("../controllers/imageController")

router.get("/", controller.getImages)
router.get("/rounds", controller.getRounds)

module.exports = router
