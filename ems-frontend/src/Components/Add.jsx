import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  const baseUrl = 'http://localhost:8000';
  const navigate = useNavigate();

  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Designation, setDesignation] = useState('');
  const [Salary, setSalary] = useState('');

  const addEmployee = async () => {
    // Check if ID is empty
    if (!Id.trim()) {
      alert("Please enter an ID");
      return;
    }

    const body = { Id, Name, Age, Designation, Salary };

    // api call to add employee details
    try {
      const result = await axios.post(`${baseUrl}/api/add-employee`, body);
        console.log(result);
        alert(result.data.message);
        navigate('/');
      
    } 
    catch (error) {
        alert("Enter a unique ID");
      } 
  };

  return (
    <>
      <div style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/019/551/675/original/abstract-blue-light-lines-on-purple-background-abstract-wave-background-for-computer-wallpaper-and-landing-page-free-vector.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
        <div>
          <h2 className='addtitle text-white'>Add Employee Details</h2>
          <div className='border border mt-4 mb-5 justify-content-center' style={{ width: '80%', height: '500px', marginLeft: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
            <form action="" className='p-5'>
              <MDBInput wrapperClass='mb-4' onChange={(e) => setId(e.target.value)} id='form9Example1' label='Id' style={{ width: '90%', height: '40px', marginBottom: '30px', color: 'black' }} />
              <MDBInput wrapperClass='mb-4' onChange={(e) => setName(e.target.value)} id='form9Example1' label='Name' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
              <MDBInput wrapperClass='mb-4' onChange={(e) => setAge(e.target.value)} id='form9Example1' label='Age' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
              <MDBInput wrapperClass='mb-4' onChange={(e) => setDesignation(e.target.value)} id='form9Example1' label='Designation' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
              <MDBInput wrapperClass='mb-4' onChange={(e) => setSalary(e.target.value)} id='form9Example1' label='Salary' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            </form>

            <button onClick={addEmployee} className='p-1 ' style={{ color: 'white', border: 'none', borderRadius: "5px", justifyContent: 'center', backgroundColor: '#2f628f', alignItems: 'center', marginLeft: '550px' }}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
