# CelebalSummerInternship2022

Reference-style: 
![alt text][logo]

[logo]: :rocket: "Logo Title Text 2"[WEBSITE](https://adminstudent1.herokuapp.com/documentation/#/)

tech used = node.js , mongodb atlas, npm, swagger doc.

Problem Statement - 

Create a CRUD Operations for a Student Application having the
following functionality:

1. Admin can register the students and circulate the StudentID to respective Student
2. Admin can update the total marks plus marks in every subject in the system
3. Students can log-in using the StudentId and in response get the Authentication
    Token used for further APIs
4. Using the AuthToken Student can view the detailed results or total marks or
    percentages only (used query parameters here)
5. Admin only can delete the student record


EACH FOLDER EXPLANATION:

    1. CONTROLLER - here in this folder we have two contoller
            a)Admin controller file where all function are written that has been asked 
            b)User Controller file where all functions related to student can be seen.
    
    2. HELPER -here we have documentation file where all swagger documentation code is written , this code gives visual appeareance of all APIs we made
    
    3. MIDDLEWARE - 
            this file help in authorizing JWT token created everytime admin or student login in

    4. MODELS - this create for mongoose Atlas where all database stored to their     respective collection. This Folder has 3 Models:
            a) User.js - where student's studentID, firstName, lastName,            familyBackground, phoneParent, course all these information are stored.
            b)Admin.js - is place where Admin"s information like:
                           { adminID, firstName, lastName, email}
                           are stored.
            c)Marksheet.js - this is created for student marks of a exam, which can only be created/updated by admin and can only viewed by user/student with their studentID.

    5. ROUTES - are all the links that will be connected to server url can be seen in documentation.js
                a) AdminRoutes - all route of admin operations
                b) UserRoutes - all route of student operations.
                c) user.doc - all user APIs written in javascript can be visualize 
                                thru swagger documentation to visualize by just
                                few clicks and entering data.
                d) admin.doc - all admin APIs written in javascript can be visualize
                                thru swagger documentation to by just few clicks
                                and entering required data
        
Three or more...

---
                                    
                                    Rest Endpoints

    THESE POINTS CAN BE VISUALIZE BY WEBSITE LINKED UP

    a. POST /student/login
        • Students pass their studentID in the form data
        • API should check StudentID exists or not if exists send authToken in
            response with 200 else return 404
    b. GET /student/results
        • Middleware to verify the authentication token present in the header
        • Return the status with a proper error message if a token is invalid
        • Students can filter the results by passing any subject name, In this case,
            only specified subject marks would return
    c. GET /me
        • Middleware to verify the authentication token present in the header
        • Student can view their details inserted by Admin like family background,
            mobile no. course details etc.
    d. PUT /student/update
        • Middleware to verify the authentication token present in the header
        • Students can update their personal details e. POST /admin/login
        • Admin pass the AdminId in form data
        • API should check StudentID exists or not if exists send authToken in
            response with 200 else return 404
    f. POST /admin/addStudent
        • Middleware to verify the authentication token present in the header
        • Insert the new record of the Student and in response return the Student
            ID
   
    g. PUT /admin/students/id
        • Middleware to verify the authentication token present in the header
        • Update the student record h. DELETE /admin/students/id
        • Middleware to verify the authentication token present in the header
        • Delete the student record

TO LEARN ABOUT MORE ON SWAGGER DOC [CLICK ON THIS](https://editor.swagger.io) OR CLICK ON [THIS VIDEO](https://youtu.be/sTLJ1mHpsOI)