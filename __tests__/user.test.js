const mongoose = require("mongoose");
const request = require ("supertest");

const app = require('../app');
require("dotenv").config();

//Connecting to MongoDB before each test
beforeEach(async ()=>{
    await mongoose.connect(process.env)
    .then(
        ()=>{
        console.log("Connection to MongoDB established for Jest")
        }, err =>{console.log("Failed to connect to MongoDB for Jest",err)}
    );

});
//Disconnect from MongoDB
afterEach(async()=>{
    await mongoose.connection.close();
})

describe("Requests for /api/user",()=>{
    it("Get Returns all users",async ()=>{
    const res = await request(app)
    .get('/api/users');
    

expect(res.statusCode).toBe(200);
expect(res.body.status).toBeTruthy();
expect(res.body.data.lenght).toBeGreaterThan(0);
},10000);

})
