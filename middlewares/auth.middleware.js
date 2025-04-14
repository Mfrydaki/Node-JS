const jwt = require('jsonwebtoken');
const authService = require('../services/auth.services');

 function verifyToken (req, res, next){
    const  authHeader = req.headers['authorization'];
    console.log("REQ 1>>>>",req);
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({status:false, message:"Access Denied. No token provided."});
    }
    const result = authService.verifyAccessToken(token);

    if (result.verified){
        req.user = result.data;
        console.log("REQ 2 >>>>", req)
        next();
    }else{
        return res.status(403).json({status:false , data:result.data})
    }

 }
 module.exports = {verifyToken};