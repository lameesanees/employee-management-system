// 1. import db.js file
const db = require('./db')

//here we define all the functions (logic)

// 1. get all employees from the db(mongodb)
const getEmployees = () => {
    return db.Employee.find().then(
        (result) => {  //result-all employee details
            if (result) {
                return {
                    statusCode: 200,
                    employees: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'No data found'
                }
            }
        }
    )
}

// 2. get an employee from db
const viewEmployee = (Id) => {
    return db.Employee.findOne({Id}).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    employee: result
                };
            } else {
                return {
                    statusCode: 404,
                    message: "No data found"
                };
            }
        }
    );
};

// 3. add new employee to the db
const addEmployee=(Id,Name,Age,Designation,Salary)=>{
    // check if employee id already exists
    return db.Employee.findOne({Id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:'Employee already exists'
            }
        }
        else{
            // otherwise save the employee details
            const employeeData = new db.Employee({Id,Name,Age,Salary,Designation,Salary})
            // save the employee
            employeeData.save()
            // send response back to client
            return{
                statusCode:200,
                message:'Employee Added Successfully!'
            }
        }
    })
}

// delete an employee
const deleteEmployee = (Id) => {
    return db.Employee.deleteOne({ Id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    message: 'Employee Deleted Successfully!'
                };
            } else {
                return {
                    statusCode: 404,
                    message: 'Employee deletion failed'
                };
            }
        }
    );
};

// update employee
const updateEmployee = (Id, Name, Age, Designation, Salary) => {
    return db.Employee.findOne({ Id }).then((response) => {
        if (response) {
            // assign the new employee details into db
            response.Id = Id;
            response.Name = Name;
            response.Age = Age;
            response.Designation = Designation;
            response.Salary = Salary;

            // to save updated employee details into the database
            response.save();
            return {
                statusCode: 200,
                message: "Updated Successfully"
            };
        } else {
            return {
                statusCode: 404,
                message: "Updation failed"
            };
        }
    });
};

module.exports={
    getEmployees,
    viewEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee
   
}
