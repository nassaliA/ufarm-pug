const  express = require("express");
const router =express.Router();

router.get("/farmer1D",(req,res)=>{
res.render("farmer1D")})



// this should always be the last line in your routes file
module.exports = router