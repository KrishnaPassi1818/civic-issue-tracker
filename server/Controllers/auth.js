const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
require("dotenv").config();

//sign Up logic / route handler
exports.signUp =async (req,res)=>{
    try{
        //fetch the data
        const{name,email,password,role} = req.body;
        //check if user already exist
        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User Already Exist, pls Login",
            })
        }

        //hash the password
        let hashedPasssword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing Password",
            })
        }

        //create entry for user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role,
        })

        return res.status(200).json({
            success:true,
            message:"User Created Successfully",
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Unable to create user, pls try again",
        })
    }
}

//Login Logic

exports.login =async (req,res)=>{

    try{
        //fetch data
        const {email,password} = req.body;
        //check if user registered
        const user =await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found, pls SignUp",
            })
        }

        const payload ={
            email:user.email,
            id:user._id,
            role:user.role,
        }
        //verify password and generate jwt token
        
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2hr"});
            user.token = token;
            user.password = undefined;

            //now create a cookie
            const options ={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("UserCookie",token,options).status(200).json({
                success:true,
                token,user,
                message:"User LoggedIn Successfully",
            })
        }else{
            res.staus(403).json({
                success:false,
                message:"Incorrect Password",
            })
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Unable to login, pls try again",
        })
    }
}
