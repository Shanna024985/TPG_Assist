//////////////////////////////////////////////////////
// REQUIRE BCRYPT MODULE
//////////////////////////////////////////////////////
const bycrypt = require("bcrypt");

//////////////////////////////////////////////////////
// SET SALT ROUNDS
//////////////////////////////////////////////////////
const saltRounds = 10;

//////////////////////////////////////////////////////
// MIDDLEWARE FUNCTION FOR COMPARING PASSWORD
//////////////////////////////////////////////////////
module.exports.comparePassword = (req, res, next) => {
    const callback = (error, isMatch) => {
        if (error){
            console.error("Error bycrypt: ",error);
            res.status(500).json(error);
        } else {
            if (isMatch){
                next();
            } else {
                res.status(401).json({message: "Wrong password"});
            }
        }
    }
    
    bycrypt.compare(req.body.password, res.locals.hash, callback);
};

//////////////////////////////////////////////////////
// MIDDLEWARE FUNCTION FOR HASHING PASSWORD
//////////////////////////////////////////////////////
module.exports.hashPassword = (req, res, next) => {
    const callback = (error,hash) => {
        if (error){
            console.error("Error bycrypt: ",error);
            res.status(500).json(error)
        } else {
            res.locals.hash = hash
            next();
        }
    }    
    bycrypt.hash(req.body.password,saltRounds,callback);
};