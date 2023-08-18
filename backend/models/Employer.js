const mongoose= require('mongoose')

const EmployerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployerModel = mongoose.model("employers", EmployerSchema)
module.exports = EmployerModel