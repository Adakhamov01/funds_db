const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const EmployerModel = require("./models/Employer")

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["*"],
    }
))

mongoose.connect("mongodb+srv://toktasinovakmalzhan01:9UplLWWcyfuizHcH@cluster0.gvieya5.mongodb.net/")

app.post('/login', (req, res) => {
    const {email, password} = req.body
    EmployerModel.findOne({email, email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.get("/", (req, res) => {
    res.json("Hello")
})

app.post('/register', (req, res) => {
    EmployerModel.create(req.body)
    .then(employers => res.json(employers))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running");
})
