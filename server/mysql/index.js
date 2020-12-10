const mysql = require("mysql");
const client  = mysql.createConnection({
    host:"localhost",
    user:"root", // 默认的
    password:"",
    database:"user"
})


function sqlfn(sql,arr,cb){
    return new Promise((resolve,reject)=>{
        client.query(sql,arr,function(error,result){
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

module.exports =  sqlfn