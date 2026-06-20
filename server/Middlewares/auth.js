const jwt = require("jsonwebtoken")
require("dotenv").config();

//Authentication Middleware

exports.auth =(req,res,next)=>{
    try{
        const token = req.body?.token || req.cookies?.UserCookie ||req.header("Authorization")?.replace("Bearer ", "");
        console.log("Body:", req.body);
        console.log("Cookies:", req.cookies);

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            })
        }
        //verify the token
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user =decoded;
            next(); 

        }catch(err){
            res.status(401).json({
                success:false,
                message:"Token in Invalid",
            })
        }

    }catch(err){
        return res.status(401).json({
            success:false,
            message:"User not authenticated",
        })
    }
}

//Admin Authorization middlewate

exports.isAdmin =(req,res,next)=>{
    try{
        if(req.user.role != 'admin'){
            return res.status(401).json({
                success:false,
                message:"User role is not matching",
            });
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Unale to verify, something went wrong",
        })
    }
}