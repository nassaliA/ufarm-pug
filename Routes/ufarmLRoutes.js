const  express = require("express");
const router =express.Router();

router.get("/ufarmL",(req,res)=>{
res.render("ufarmL")})



// this should always be the last line in your routes file
module.exports = router