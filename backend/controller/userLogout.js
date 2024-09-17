

async function userLogout(req, res){
    try {
        res.clearCookie("token")
        

        res.json({
            message : "logout successfully",
            error: false,
            success : true,
            data : []
        })
        
    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            err: true
        })
    }
}

module.exports = userLogout