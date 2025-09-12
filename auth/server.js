const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express()
app.use(express.urlencoded({ extended: false }));

app.use(cors())

const users = []

app.post("/register", async (req, res) =>{
    const { username, email, password, role } = req.body
    const hsahedPass = await bcrypt.hash(password, 10)
    const newUser = {
        id: Date.now(),
        username, 
        email, 
        password: hsahedPass, 
        role 
    }

    console.log(req.body);
    
    users.push(newUser)
    console.log(newUser);
    

    res.status(201).send("user created successfully !!!")

})

app.listen(8001, ()=>{
    console.log("serevr started !!!");
})