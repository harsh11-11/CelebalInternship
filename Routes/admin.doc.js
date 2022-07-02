const adminCreation = {
    tags: ["Admin"],
    description : "[ Operations that can be done by Admin ]",
    
    requestBody : {
        content: {
            "application/json":{
                schema : {
                    type : "object",
                    properties: {
                        adminID: {
                            type: "string",
                            description:"type studeid provided by admin",
                            example:"ADM01",
                        },
                        firstName: {
                            type: "string",
                            description:"type firstname",
                            example:"Harsh",
                        },
                        lastName: {
                            type: "string",
                            description:"type lastname",
                            example:"Jain",
                        },
                        email: {
                            type: "string",
                            description:"type email",
                            example:"ad123@gmail.com",
                        },
                    },
                },
            },
        },
    },

    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                         properties:{
                            type:"object",                        
                        }
                    },
                },
            },
        },

        404:{
            description: "USER DOESNT EXISTS",
            schema:{
                type:"string" 
            }
        }
    },
}


const adminLogin = {
    tags: ["Admin"],
    description: "[Admin can login thru this]",

    requestBody: {
        content: {
            "application/json": {
                schema:{
                    type: "object",
                    properties: {
                        adminID:{
                            type:"string",
                            example:"ADM5",
                        },
                    },
                },
            },
        },
    },

    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                         properties:{
                            token:"",
                            
                        }
                    },
                },
            },
        },

        404: {
            description: "USER DOESNT EXISTS",
            schema:{
                type:"string" 
            }
        },
    },
};

const studentRegister = {
    tags: ["Admin"],
    description : "[ Operations that can be done by Admin ]",

    parameters:[
        {
            in: "header",
            name: "token",
            type:"string", 
            example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SUQiOiJTMDAxIiwiaWF0IjoxNjU2NjMzOTEyLCJleHAiOjE2NTY2Mzc1MTJ9.986RWhsvyWzl728qblxNsQLCKhiSfWhOYEMCio1Hjw4",  
            required: "true",
        }
    ],

    requestBody : {
        content: {
            "application/json":{
                schema : {
                    type : "object",
                    properties: {
                        studentID: {
                            type: "string",
                            description:"type studentID",
                            example:"S002",
                        },
                        firstName: {
                            type: "string",
                            description:"type firstname",
                            example:"dev",
                        },
                        lastName: {
                            type: "string",
                            description:"type lastname",
                            example:"loper",
                        },
                        familyBackground: {
                            type: "string",
                            description:"type family background",
                            example:"xyz",
                        },
                        phoneParent: {
                            type: "string",
                            description:"type phone number of any parent",
                            example:"775600000",
                        },
                        course: {
                            type: "string",
                            description:"type course name you applied for",
                            example:"Btech in CSE",
                        },
                    },
                },

            },
        },
    },

    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        properties:{
                            studentID:"",  
                            
                        },
                    },
                },
            },
        },

        404:{
            description: "USER DOESNT EXISTS",
            schema:{
                type:"string" 
            },
        },
    },
};

const studentMarksUpload = {
    tags: ["Admin"],
    description : "[ Operations that can be done by Admin ]",

    parameters:[
        {
            in: "header",
            name: "token",
            type:"string", 
            example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SUQiOiJTMDAxIiwiaWF0IjoxNjU2NjMzOTEyLCJleHAiOjE2NTY2Mzc1MTJ9.986RWhsvyWzl728qblxNsQLCKhiSfWhOYEMCio1Hjw4",  
            required: "true",
        }
    ],
    
    requestBody : {
        content: {
            "application/json":{
                schema : {
                    type : "object",
                    
                    properties: {
                        studentID: {
                            type: "string",
                            description:"type studentID",
                            example:"S002",
                        },
                        mathsMarks: {
                            type: "string",
                            description:"submit maths marks out of 100",
                            example:"90",
                        },
                        scienceMarks: {
                            type: "string",
                            description:"submit science marks out of 100",
                            example:"90",
                        },
                        geographyMarks: {
                            type: "string",
                            description:"submit geography marks out of 100",
                            example:"90",
                        },
                    },
                },
            },
        },
    },

    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type:"object",                        
                        
                    },
                },
            },
        },

        404:{
            description: "USER DOESNT EXISTS",
            schema:{
                type:"string" 
            },
        },
    },

};

const updateStudentsMarks = {
    tags:["Admin"],
    
} 

const deleteStudentRecord = {
    tags:["Admin"],
    description:"[operation done by admin to delete student record]",

    parameters:[
        {
            in: "header",
            name: "token",
            type:"string", 
            example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SUQiOiJTMDAxIiwiaWF0IjoxNjU2NjMzOTEyLCJleHAiOjE2NTY2Mzc1MTJ9.986RWhsvyWzl728qblxNsQLCKhiSfWhOYEMCio1Hjw4",  
            required: "true",
        },
        {
            in: "path",
            name: "studentID",
            type:"string", 
            required: "true",
        }
    ],

    responses: {
        200: {
            description: "USER HAS BEEN DELETED",
            content: {
                "application/json":{
                    schema:{
                        type:"STRING",                        
                        
                    },
                },
            },
        },

        404:{
            description: "USER CANT BE DELETED",
            schema:{
                type:"string" 
            },
        },
    },
}

const adminRouteDocs = {
    "/admin/addStudent" : {
        post: studentRegister,
    },

    "/admin/login" : {
        post: adminLogin,
    },

    "/admin/signup" : {
        post:adminCreation,
    },

    "/admin/uploadMarks":{
        post: studentMarksUpload,
    },

    "/admin/students/{id}" : {
        put: updateStudentsMarks,
        delete: deleteStudentRecord,
    },
};

module.exports = adminRouteDocs;