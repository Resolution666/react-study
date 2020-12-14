const express = require("express");
const user = require("./user");
const login = require("./login")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use("/api/user",user)
app.use("/api/login",login)

app.listen(3030,()=>{
    console.log("服务器运行在3030端口上")
})