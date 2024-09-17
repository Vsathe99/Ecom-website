const jwt = require('jsonwebtoken')
const awt_secret = "vs@.&12345"


async function authToken(req,res,next){
    try {
        const token = req.header("auth-token");

        if(!token){
            return res.status(401).send({error: "Please authenticate."})
        }

        jwt.verify(token, awt_secret, function(err, decoded){
            console.log(err)
            console.log("decoded", decoded)

            if(err){
                console.log("error ",err)
            }

            req.userId = decoded?._id
            next()
        });


     
    } catch (error) {
        res.status(400).json({
            message : error.message,
            data :[],
            error : true,
            success : false
        })
        
    }
}

module.exports = authToken