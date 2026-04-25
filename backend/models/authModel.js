const {query} = require("../service/dbConnection")

module.exports.createNewUsers = function createNewUsers(username, email,password) {
    let sql = "INSERT INTO users(email,username,password) VALUES ($1,$2,$3) RETURNING id, role, username"
    return query(sql, [email,username,password]).then(function(result){
        return result.rows;
    })
}
module.exports.getUserByEmail = function getUserByUsername(email) {
    let sql = "SELECT id,username,email,role,password FROM users WHERE email = $1"
    return query(sql,[email]).then(function (result) {
        return result.rows
    })
}