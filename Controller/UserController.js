const Student = require("../models/User");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const Marksheet = require("../models/Marksheet");


exports.login = (req,res)=>{
    let{studentID} = req.body;
    Student.findOne({studentID:studentID})
        .then((student)=>{
            console.info(`User with studentID: ${studentID}is been found`);
            if(studentID === student.studentID){
                const token = JWT.sign({
                    studentID: student.studentID,
                },
                "CELEBAL",
                {
                    expiresIn: "1h",
                }
            );  
                console.info("login succeedd");
                return res.status(200).send(token);
            }
            console.warn("studentID incorrect");
            return res.status(401).send("Entered studentID is incorrect ");

        }).catch((error)=>{
            console.error(`user with StudentID ${studentID}not found`);
            return res.status(404).send(`user with StudentID: ${studentID} doesnt exist`);

        });
}

exports.studentDetails = (req,res,next) => {
    const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
    let studentID  = decodedToken.studentID;

   
    
    Student.findOne({studentID: studentID})
        .then((student)=>{
            if(student){
                
                console.info(`Student with id: ${studentID} was found with Details`);
                
                //helps in transferring data to other function
                res.locals.student = student;

                return next();
            }

            console.log(`Student with id: ${studentID} was not found with Details`);
            return res.status(404).send("Not found")
        })
        .catch(()=>{
            console.error("Someting bad Happen");
            return res.status(500).send("Someting bad Happen");
        })
}

exports.studentMarksheet = (req,res) => {
    const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
    let studentID  = decodedToken.studentID;
    
    Marksheet.findOne({studentID: studentID})
        .then((marksheet)=>{
            if(marksheet){
                console.info(`Student with id: ${studentID} was found with marksheet`);
                let {student} = res.locals;
                return res.status(200).send([student, marksheet]);
            }

            console.log(`Student with id: ${studentID} was not found with marksheet`);
            return res.status(404).send("Not found")
        })
        .catch(()=>{
            console.error("Someting bad Happen");
            return res.status(500).send("Someting bad Happen");
        })
}

exports.getStudentResult = (req,res)=>{
    const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
    let studentID  = decodedToken.studentID;
    // let studentID  = decodedToken.studentID;
    // let studen = req.query;
    // console.log(studen);
    // // return res.status(200).send("check");

    // const marksheet = Marksheet.find({studentID:studentID}).select(studen)
    // // .then((marksheet)=>{
    // //     if(marksheet.length === 0){
    // //         console.error("Student not found");
    // //         return res.status(404).send("NOT FOUND");
    // //     }
    // //     return res.status(200).send(marksheet);
    // // })
    // // .catch((error)=>{
    // //     console.error("STUDENT not found")
    // //     res.status(500).send("Not found");
    // // })
    // // console.log(marksheet);
    // // return marksheet;
    // return res.status(200).send(marksheet);
    let q = (Object.keys(req.query)); 
    q1 = q[0];
    var object = q.reduce(
      (obj, item) => Object.assign(obj, { [item]: 1 }), {});
      let newObj = {'_id': 0, ...object};
    projection = newObj;
    console.log(projection)
    Marksheet.findOne({studentID:studentID},projection).then((student)=>{
        {

           return res.status(200).send(student)
           
        }
      }).catch((error)=>{
        return res.status(500).send(error)
      })
}

exports.getUpdateStudentDetails = (req,res)=>{
    const decodedToken = JWT.verify(req.headers.token, "CELEBAL");
    let studentID  = decodedToken.studentID;
    let{firstName, lastName, familyBackground, phoneParent, course} = req.body;

    Student.updateOne(
        {studentID:studentID},
        {$set :{firstName, lastName, familyBackground, phoneParent, course}}
    )
        .then(()=>{
            console.info("Update details successfully");
            return res.status(200).send({firstName, lastName, familyBackground, phoneParent, course});
        })
        .catch(()=>{
            console.info("Update Not succes");
           return res.status(500).send("There was an error");
        })
}
