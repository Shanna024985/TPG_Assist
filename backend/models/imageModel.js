const {query} = require("../service/dbConnection")

module.exports.getImages = function getImages(round) {
    let sql = `SELECT name, coordinatesx AS "Latitude", coordinatesy AS "Longitude", distance AS "Distance", round AS "Round", photolink AS "linkToPicture" FROM images WHERE round = $1 ORDER BY distance ASC`
    return query(sql, [round]).then(function(result){
        return result.rows;
    })
}
module.exports.getRounds = function getRounds() {
    let sql = `SELECT  roundname as "label",id AS "value", coordinatesx AS "Latitude", coordinatesy AS "Longitude" FROM rounds`
    return query(sql).then(function(result){
        return result.rows;
    })
}