const ms2s = require('mongoose-to-swagger');
const User = require('./models/user.model');

exports.options = {
    "componets": {
      "schemas" :{
        User : ms2s(User)
      }  
    },
    "openapi" : "3.1.0",
    "info" : {
        "version": "1.0.0",
        "title" : "Users and Products CRUD API",
        "description" : "An application for creating users and choosing products",
        "contact" :{
            "name": "API Support",
            "url" : "https :// aueb.gr",
            "email" : "support@example.com"
        }
    },
    "servers" :[
        {
            url:"http://localhost:3000",
            description: "Local Server"
        },
        {
            url:"http://www.test.gr",
            description: "Testing Server"
        }
    ], "tags": [
        {
            "name" : "Users",
            "description" : "Endpoints for User"
        },
         {"name" : "Users and Products",
          "description" : "Endpoints for users and their products"},
         
          {
            "name" : "Auth",
          "description" : "Endpoints for authentication"
          }
    ],
    "paths" :  {
        "/api/users" :{
            "get" : {
                "tags":["Users"],
                 "description" : "Return a list of all users", 
                 "responses" :{
                 "200":{
                    "description" : "List of all users",    "contect" :{
                      "application/json":{
                         "schema":{ 
                            "type": 'array', 
                            "items": {
                                "$ref": "#/components/schemas/User" }
                            }
                        }
                    }
                }
            }
        } 
    },
     "/api/users/{username}":{
                "get" :{
                   "tags":["Users"],
                 "description" : "Return a list of all users", 
                 "responses" :{
                 "200":{
                    "description" : "List of all users",    "contect" :{
                      "application/json":{
                         "schema":{ 
                            "type": 'array', 
                            "items": {
                                "$ref": "#/components/schemas/User" }
                            }
                        }
                    }
                }
            }
        } 
    },
                }
            }
        }
    } 
}