const express = require("express");
const user = require("./user");
const app = express();
app.use("/user",user)

app.listen(3030,()=>{
    console.log("服务器运行在3030端口上")
})