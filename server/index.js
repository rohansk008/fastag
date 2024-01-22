const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("server is running")
})
const database = [{
    email:"hello@gmail.com",
    password:"123"
}]
app.post("/login",(req,res)=>{
    console.log("server is running")
})