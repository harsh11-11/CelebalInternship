const userRouteDocs = require("../Routes/user.doc");
const adminRouteDocs = require("../Routes/admin.doc");

const swaggerDocumentation = {
    openapi : "3.0.0",
    info: {
        title: "Task 1 - CRUD operation for Student Application",
        version: "0.0.1",
        description: "Made by Harsh Sunil Jain(CSI-169)",
    },


    servers: [
        {
            url: "https://localhost:4000",
            description: "Local",
        },

        {
            url: "https://adminstudent1.herokuapp.com/",
            description: "Product after publishing",
        }
    ],

    

    
    tags:[
        {
            name: "Admin",
            description : "[ Operations that can be done by Admin ]",
        },

        {
            name: "Student",
            description : "[ Operations that can be done by Student ]",
        }

    ],
    
    
    paths: {
        
        ...userRouteDocs,
        ...adminRouteDocs,
    }



};

module.exports = swaggerDocumentation;