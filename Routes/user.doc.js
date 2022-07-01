const getDetails = {
    tags: ["Student"],
    description: "STudent details can be seen",
    parameters:[
        {
            in: "header",
            name: "token",
            type:"string", 
            example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SUQiOiJTMDAxIiwiaWF0IjoxNjU2NjMzOTEyLCJleHAiOjE2NTY2Mzc1MTJ9.986RWhsvyWzl728qblxNsQLCKhiSfWhOYEMCio1Hjw4",  
            required: "true",
        }
    ],

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
            }
        }
    },
    
};

const studentLogin = {
    tags: ["Student"],
    description: "STudent can Login",
   
  requestBody : {
        content: {
            "application/json":{
                schema : {
                    type : "object",
                    properties: {
                        studentID: {
                            type: "string",
                            description:"type studeid provided by admin",
                            example:"S001",
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

        404:{
            description: "USER DOESNT EXISTS",
            schema:{
                type:"string" 
            }
        }
    },
};

const studentUpdate = {
    tags: ["Student"],
    description: "STudent can update after logging in and checking token in header",
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
                        familyBackground: {
                            type: "string",
                            description:"type family background",
                            example:"middle class",
                        },
                        phoneParent: {
                            type: "string",
                            description:"type phone number of any parent",
                            example:"775678900",
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
                            familyBackground: {
                                type: "string",
                                description:"type family background",
                                example:"middle class",
                            },
                            phoneParent: {
                                type: "string",
                                description:"type phone number of any parent",
                                example:"775678900",
                            },
                            course: {
                                type: "string",
                                description:"type course name you applied for",
                                example:"Btech in CSE",
                            },  
                            
                        }
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

}


const getFilteredResults = {
    tags: ["Student"],
    description: "STudent can update after logging in and checking token in header",
    parameters:[
        {
            in: "header",
            name: "token",
            type:"string", 
            example:"type the token here",  
            required: "true",
        },
        {
            in:"query",
            name:"mathsMarks",
            description: "will display maths marks out of 100"
        },
        {
            in:"query",
            name:"scienceMarks",
            description: "will display science marks out of 100"
        },
        {
            in:"query",
            name:"geographyMarks",
            description: "will display geography marks out of 100"
        },
        {
            in:"query",
            name:"totalMarks",
            description: "will display total marks"
        }
    ],

    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                         properties:{
                            mathsMarks: {
                                type: "string",
                                description:"get maths marks out of 100",
                                example:"",
                            },
                            scienceMarks: {
                                type: "string",
                                description:"get science marks out of 100",
                                example:"",
                            },
                            geographyMarks: {
                                type: "string",
                                description:"get geography marks out of 100",
                                example:"",
                            },
                            totalMarks: {
                                type: "string",
                                description:"get total marks out of 300",
                                example:"",
                            },
                            
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

const userRouteDocs = {
    "/me" : {
        get: getDetails,
    },

    "/student/login" : {
        post: studentLogin, 
    },

    "/student/update":{
        put: studentUpdate,
    },

    "/student/results":{
        get: getFilteredResults,
    }

}

module.exports = userRouteDocs;