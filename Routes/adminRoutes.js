const  express = require("express");
const { Admin } = require("mongodb");
const router =express.Router();

router.get('/admin', (req, res) => {
    res.render('admin', {title: "admin"});
});
router.get("/admin",(req,res)=>{
res.render("admin")})

router.post("/admin", async(req,res)=>{
    try{
        const admin = new Admin(req.body);
        await admin.save()
        res.redirect("/admin")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})


// this should always be the last line in your routes file
module.exports = router