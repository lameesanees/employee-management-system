import React, { useState, useEffect } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const baseUrl = 'http://localhost:8000';
  const navigate= useNavigate();

  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Designation, setDesignation] = useState('');
  const [Salary, setSalary] = useState('');

  // get particular employee
  const { empId } = useParams();
  console.log(empId);

  // get particular employee details
  const fetchEmployee = async () => {
      const result = await axios.get(`${baseUrl}/api/view-employee/${empId}`);
      console.log(result.data.employee);
      setId(result.data.employee.Id);
      setName(result.data.employee.Name);
      setAge(result.data.employee.Age);
      setDesignation(result.data.employee.Designation);
      setSalary(result.data.employee.Salary);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  // handleupdate function to update the employee details
  const handleUpdate = async () => {
    const body = {Id,Name,Age,Designation,Salary}
      const result = await axios.post(`${baseUrl}/api/update-employee/${Id}`,body);
      console.log('Employee details updated successfully');
      alert(result.data.message)
      navigate('/');
  };

  return (
    <div style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/019/551/675/original/abstract-blue-light-lines-on-purple-background-abstract-wave-background-for-computer-wallpaper-and-landing-page-free-vector.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
      <h2 className='addtitle text-white'>Update Employee Details</h2>
      <div className='border border mt-3 mb-5' style={{ width: '90%', height: '500px', marginLeft: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <form action="" className='p-5'>
          <MDBInput wrapperClass='mb-4' id='form9Example1' value={Id}  onChange={(e) => setId(e.target.value)} label='Id' style={{ width: '90%', height: '40px', marginBottom: '30px', color: 'black' }} />
          <MDBInput wrapperClass='mb-4' id='form9Example1' value={Name} onChange={(e) => setName(e.target.value)} label='Name' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
          <MDBInput wrapperClass='mb-4' id='form9Example1' value={Age} onChange={(e) => setAge(e.target.value)} label='Age' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
          <MDBInput wrapperClass='mb-4' id='form9Example1' value={Designation} onChange={(e) => setDesignation(e.target.value)} label='Designation' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
          <MDBInput wrapperClass='mb-4' id='form9Example1' value={Salary}onChange={(e) => setSalary(e.target.value)} label='Salary' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
        </form>
        <button onClick={handleUpdate} className='p-1 mt-1' style={{ color: 'white', border: 'none', borderRadius: "5px", justifyContent: 'center', backgroundColor: '#2f628f', alignItems: 'center', marginLeft: '550px' }}>
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default Edit;
