const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    
    studentID:{
        type: String,
        required: true,
        unique:true,
    },

    firstName : {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },
    
    familyBackground: {
        type: String,
        required: true,
    },

    phoneParent: {
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("student",Student,"Student");
