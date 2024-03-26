// to connect node with mongodb
// we need to install mongoose -npm i mongoose

// 1. import mongoose
const mongoose = require('mongoose')

// 2. to connect node with mongoose
mongoose.connect('mongodb://localhost:27017/EMS')

// 3. create model and schema
//  model - collection (employees)
//  schema - field {id:string...}

const Employee = mongoose.model('Employee',{
    Id:String,
    Name:String,
    Age:String,
    Designation:String,
    Salary:String
})
module.exports={
    Employee
}
