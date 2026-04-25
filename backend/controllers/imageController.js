let model = require("../models/imageModel")
module.exports.getImages = (req, res, next) => {
    debugger
    let round = req.query.round;
    model.getImages(round).then(function(images) {
        res.status(200).json(images);
    }).catch(function(err) {
        res.status(500).json({ message: "Error" })
    });
}
module.exports.getRounds = (req, res, next) => { 
    model.getRounds().then(function(rounds) {
        res.status(200).json(rounds);
    }).catch(function(err) {
        res.status(500).json({ message: "Error" })
    });
}