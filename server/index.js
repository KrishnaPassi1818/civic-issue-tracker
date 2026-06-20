const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());
//e-variables
require("dotenv").config();
const PORT = process.env.PORT || 4000

//Middleware
app.use(express.json());

//Api Mount
const authRoutes = require("./Routes/UserAuth")
app.use("/api/v1",authRoutes);

//Database Connection
const connect = require("./config/database");
connect();
//Server sStart
app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`);
})