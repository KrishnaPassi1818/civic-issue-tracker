const express = require("express");
const router = express.Router();

const {signUp, login} = require("../Controllers/auth");
const {auth, isAdmin} = require("../Middlewares/auth");

router.post("/signUp",signUp);
router.post("/login",login);

router.get("/user/dashboard",auth,(req,res)=>{
    res.json({
        success:true,
        message:"This is the Route defined for user",
    })
})

router.get("/admin/dashboard",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"This is the Protected Route for Admin",
    })
})

module.exports= router;