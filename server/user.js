const express = require("express")
const router = express.Router();
const sqlfn  = require("./mysql/index")
const validator = require("validator")
const isEmpty = require("lodash/isEmpty")

const isValidator = (data)=>{
    let errors = {};
    console.log(data)
    if(validator.isEmpty(data.username)){
        errors.username = "请填写用户名"
    }
    if(!validator.isEmail(data.email)){
        errors.email = "请填写正确格式的邮箱"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "请填写密码"
    }
    if(validator.isEmpty(data.rePassword)){
        errors.rePassword = "请再次填写密码"
    }
    if(!validator.default.equals(data.password,data.rePassword)){
        errors.rePassword = "两次密码不相同"
    }

    return {
        errors,
        isValids:isEmpty(errors)
    }
}

router.post("/signup",(req,res)=>{
   const {errors,isValids}  = isValidator(req.body)
   if(isValids){
        var sql = "insert into user values (null,?,?,?,?)";
        var arr = [req.body.email,req.body.username,req.body.password,req.body.rePassword];
        sqlfn(sql,arr).then((response)=>{
            res.send({errors,isValids})
        },(res)=>{
            res.send(res)
        })
    }else{
        res.send({errors,isValids})
   }
}
)

router.get("/:username",(req,res)=>{
    const {username} = req.params;
    var sql = "select * from user where `username`=?";
    var arr = [username];
    sqlfn(sql,arr).then((response)=>{
        if(response.length === 0 ){
            res.send({flag:true})
        }else{
            res.send({flag:false,text:"用户名已存在"})
        }
    })
})
module.exports  = router;