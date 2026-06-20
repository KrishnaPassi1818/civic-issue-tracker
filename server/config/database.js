const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("Database Connected Successfully"))
    .catch((err)=>{
        console.error(err);
        console.log("Something went Wrong");
        process.exit(1);
    })
} 
module.exports = dbConnect;