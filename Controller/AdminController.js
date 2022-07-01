const express = require("express");
const Student = require("../models/User");
const Marksheet = require("../models/Marksheet");
const router = express();
const mongoose = require("mongoose");
const Admin = require("../models/Admin");
const JWT = require("jsonwebtoken");

exports.signup = (req,res)=>{
    let{adminID, firstName, lastName, email} = req.body;
    let admin = new Admin({
        adminID,
        firstName,
        lastName,
        email,
    });
    admin.save().then(() => {
        console.log("Admin addded successfully")
        res.status(200).send(admin);
    
    })
        .catch((error)=>{
        console.error(error);
        return res.status(500).send("error")
    });
}

exports.login = (req,res)=>{
    let{adminID} = req.body;
    Admin.findOne({adminID:adminID})
        .then((admin)=>{
            console.info(`User with adminid: ${adminID}is been found`);
            if(adminID === admin.adminID){
                const token = JWT.sign({
                    adminID: admin.adminID,
                },
                "CELEBAL",
                {
                    expiresIn: "1h",
                }
            );  
                console.info("login succeedd");
                return res.status(200).send(token);
            }
            console.warn("No admin exist");
            return res.status(404).send("No admin exist");

        }).catch((error)=>{
            console.error(`user with email ${adminID}not found`);
            return res.status(404).send(`user with email: ${email} doesnt exist`);

        });
}

exports.addStudent = (req,res)=>{
    let{studentID, firstName, lastName, familyBackground, phoneParent, course} = req.body;
    let student = new Student({
        studentID,
        firstName,
        lastName,
        familyBackground,
        phoneParent,
        course
    });
    student.save().then(() => {
        console.log("User addded successfully")
        res.status(200).send(student.studentID);
    
    })
        .catch((error)=>{
        console.error(error);
        return res.status(500).send("error")
    });
}

exports.fillMarksOfStudent = (req,res)=>{
    let{studentID, mathsMarks, scienceMarks, geographyMarks} = req.body;
    let totalMarks = Number(mathsMarks) + Number(scienceMarks) + Number(geographyMarks);
    let marksheet = new Marksheet({
        studentID,
        mathsMarks,
        scienceMarks,
        geographyMarks,
        totalMarks
    });
    marksheet.save().then(() => {
        console.log(`${studentID} marks entered successfully`);
        res.status(200).send(marksheet);
    
    })
        .catch((error)=>{
        console.error(error);
        return res.status(500).send("error")
    });
}

exports.updateStudent = (req,res) => {
    let{studentID} = req.params.studentID;
    let{mathsMarks, scienceMarks, geographyMarks} = req.body;
    let totalMarks = Number(mathsMarks) + Number(scienceMarks) + Number(geographyMarks);
    Marksheet.updateOne({studentID:studentID }, {$set:{mathsMarks, scienceMarks, geographyMarks,totalMarks}})
    .then((updateDetails)=>{
        if(updateDetails.modifiedCount >= 1 &&
            updateDetails.matchedCount >= 1 &&
            updateDetails.upsertedCount >=0)
            {
                console.info("Student info updated successfully");
                return res.status(200).send("Student information updated");
            }
            console.error(`Student with ${studentID} doesnt exist`);
            return res.status(404).send("Student doesnt exist");
    }).catch((error)=>{
        console.error(`There was error while updating student with studentID ${studentID}`);
        return res.status(500).send("Error");
    });

};

exports.deleteStudentDetails = (req,res,next) => {
    let{studentID} = req.params.studentID;
    Student.deleteOne({studentID:studentID})
    .then(()=>{
        console.log(`Deleted Details successfully`);
        return next();
    

    }).catch(()=>{
        console.error("error");
        return res.status(500).send("error")
    })

}

exports.deleteStudentMarksheet = (req,res) => {
    let{studentID} = req.params.studentID;
    Marksheet.deleteOne({studentID:studentID})
    .then(()=>{
        console.log(`Deleted Marksheet successfully`);
        return res.status(200).send("Student record deleted");


    }).catch(()=>{
        console.error(error);
        return res.status(500).send("error")
    })

}