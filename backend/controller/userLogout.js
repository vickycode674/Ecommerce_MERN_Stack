async function userLogout(req,res) {
    try{
        res.clearCookie("token")

        res.json({
            message:"logged out succesfully",
            error:false,
            success:true,
            data: []
        })
    }
    catch (err) {
          res.status(500).json({
            message: err.message || "Internal server error",
            error: true,
            success: false
          });
        }

}

module.exports = userLogout