const express = require('express');
const app = express();

function findOrders(req,res,next) {
    console.log("order");
    next();
    
}
function fillUser(req,res,next) {
    console.log("user");
    next()
}
function validateToken(req,res,next) {
    console.log("Token");
    next()
}
app.get('/' ,findOrders,fillUser, validateToken);
app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("http://localhost:3000");
    
    
})