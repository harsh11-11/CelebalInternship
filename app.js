const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require('./Routes/UserRoutes');
const adminRoute = require('./Routes/AdminRoutes');

const swaggerDoc = require("swagger-ui-express");
const swaggerDocumentation = require("./helper/documentation");

const CONNECTION_URL ="mongodb+srv://jainroc7:q7P0TtF4PtyOjBED@cluster0.yguwrv8.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config({path: './config.env'})

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose
    .connect(CONNECTION_URL,{
        useUnifiedTopology: true,
            useNewUrlParser: true
}).then(()=>{
    console.log("MongoDB is Runnin'");
}).catch(()=>{
    console.error("MongoDB connection is failed")
})

app.use(userRoute);
app.use(adminRoute);

app.use("/documentation",swaggerDoc.serve);
app.use("/documentation",swaggerDoc.setup(swaggerDocumentation));

// app.post("/login",(req,res)=>{
//     const email = req.body.email;
//     const password = req.body.password;
//     const key = 1234;
//     if(password === key)
//     return res.status(200).send("Password is correct");
    
//     res.status(401).send("password is incorrect");
// })


const Port = process.env.PORT || 4000
app.listen(Port, () => {
    console.log(`Connection Established with port number: ${Port}`)
})