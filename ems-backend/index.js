// 1. import express
const express = require('express')

//2. import cors
const cors = require('cors')

const logic = require('./Services/logic')

//3. create a backend app using express
const emsServer = express()

//4. connect frontend port using cors
emsServer.use(cors({
    origin: "http://localhost:5173"
}))

//5. convert json data into js
emsServer.use(express.json()) //Returns middleware that only parses json

//6. create a port for backend
emsServer.listen(8000, () => {
    console.log('emsServer listening on port 8000');
})

//7. Example
// emsServer.get('/', (req, res) => {
//     res.send('Hello World!')
// })

//   http://localhost:8000/api/get-all-employee
emsServer.get('/api/get-all-employee', (req, res) => {
    logic.getEmployees().then((response) => {
        res.status(response.statusCode).json(response)
    })
})
//   http://localhost:8000/api/view-employee/54521
emsServer.get('/api/view-employee/:Id', (req, res) => {
    logic.viewEmployee(req.params.Id).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//   http://localhost:8000/api/add-employee
emsServer.post('/api/add-employee',(req,res)=>{
    logic.addEmployee(req.body.Id,req.body.Name,req.body.Age,
        req.body.Designation,req.body.Salary).then(
            (response)=>{
                res.status(response.statusCode).json(response)
            }
        )
})
// http://localhost:8000/api/delete-employee
emsServer.delete('/api/delete-employee/:Id', (req, res) => {
    logic.deleteEmployee(req.params.Id).then((response) => {
        res.status(response.statusCode).json(response);
    });
});
// http://localhost:8000/api/update-employee
emsServer.post('/api/update-employee/:Id',(req,res)=>{
    logic.updateEmployee(req.params.Id, req.body.Name, req.body.Age, req.body.Designation, req.body.Salary)
        .then((response) => {
            res.status(response.statusCode).json(response);
        })
    });
