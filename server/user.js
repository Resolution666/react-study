const express = require("express")
const router = express.Router();
router.get("/",(req,res)=>{
    res.send({
        msg:"1111"
    })
})

module.exports  = router;