const mongoose = require("mongoose");

const Marksheet = new mongoose.Schema({
    
    studentID:{
        type: String,
        required:true,
    },
    
    mathsMarks : {
        type: Number,
        required: true,
    },

    scienceMarks : {
        type: Number,
        required: true,
    },

    geographyMarks : {
        type: Number,
        required: true,
    },

    totalMarks: {
        type: Number
    }

});

module.exports = mongoose.model("Marksheet",Marksheet,"Marksheet");
