const express = require("express");
const router = express.Router();
const jwt = require("json-web-token");
const {secret}  = require("./config")
const sqlfn = require("./mysql/index");




router.post("/",function(req,res){
    const data = req.body;
    const sql = "select * from user where `username`=? AND `password`=?";
    const arr  = [data.username,data.password];
    sqlfn(sql,arr).then((result)=>{
        console.log("result:",result)
        
        if(result.length === 0){
            res.send({error:{username:"用户名不存在"}})
        }else{
            jwt.encode(secret,result[0],(error,response)=>{
                if(!error){
                    res.send({...result[0],jwt:response})
                }
            })
        }
    },(error)=>{
        console.log("error:",error)
    })
    // jwt.encode(secret,data)
});



module.exports = router;