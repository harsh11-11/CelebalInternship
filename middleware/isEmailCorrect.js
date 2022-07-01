const express = require("express");
const router = express();
const JWT = require("jsonwebtoken");


exports.isEmailCorrect = (req,res,next)=>{
    if(req.body.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        next();
    }
     return res.end();
};

exports.isTokenValid = (req,res,next)=>{
    try{
        if(!req.headers.token){
            console.error("No token was sent");
            return res.status(403).send("INVALID TOKEN");
        }
        
        const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
        let studentID = decodedToken.studentID
        if(decodedToken.adminID){
            res.locals.studentID = studentID;
            return next();
        }
        console.warn("SUSPICIOUS TOKEN ENTERED");
        return res.status(417).send("Please send a valid token");
    }
    catch(error){
        console.error("Token validation failed")
        return res.status(401).send("token invalid");

    }
    
};

exports.isTokenValidStudent = (req,res,next)=>{
    try{
        if(!req.headers.token){
            console.error("No token was sent");
            return res.status(403).send("INVALID TOKEN");
        }
        
        const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
        
        if(decodedToken.studentID){
            return next();
        }
        console.warn("SUSPICIOUS TOKEN ENTERED");
        return res.status(417).send("Please send a valid token");
    }
    catch(error){
        console.error("Token validation failed")
        return res.status(401).send("token invalid");

    }
    
};