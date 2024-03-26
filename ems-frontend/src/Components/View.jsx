import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {
  const [userData, setUserData] = useState({})
  const baseUrl = 'http://localhost:8000'
  const {id} = useParams()
  const viewEmployee = async () => {
    const result = await axios.get(`${baseUrl}/api/view-employee/${id}`)
    console.log(result.data.employee);
    setUserData(result.data.employee)
  }
  useEffect(() => {
    viewEmployee()
  },[])
  return (
    <>
       <div style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/019/551/675/original/abstract-blue-light-lines-on-purple-background-abstract-wave-background-for-computer-wallpaper-and-landing-page-free-vector.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>

      <h2 className='addtitle mt-2 text-white'>View Employee Details</h2><br /> <br />
      <div className='d-flex justify-content-center'>
        <MDBCard style={{ width: '40%', marginLeft:'80px', color: 'white',height:"350px" }} className='p-5 bg-dark'>
          <MDBListGroup flush  style={{fontSize:'20px'}}>
            <MDBListGroupItem><strong>Employee ID:</strong> <span style={{color:'green'}}>{userData.Id}</span> </MDBListGroupItem>
            <MDBListGroupItem><strong>Full Name:</strong><span style={{color:'green'}}>{userData.Name}</span></MDBListGroupItem>
            <MDBListGroupItem><strong>Age: </strong><span style={{color:'green'}}>{userData.Age}</span></MDBListGroupItem>
            <MDBListGroupItem><strong>Designation: </strong><span style={{color:'green'}}>{userData.Designation}</span> </MDBListGroupItem>
            <MDBListGroupItem><strong>Salary:</strong> <span style={{color:'green'}}>{userData.Salary}</span></MDBListGroupItem>
          </MDBListGroup>
        </MDBCard>

        <div className='col'>
          <img src="https://items-people.com/media/2021/11/employee-management-718x600.png" alt="" className='img-fluid' 
          style={{ marginLeft: '200px', width: '60%' }} />
        </div>
      </div>
      <Link to="/" className='justify-content-center'>
        <button className='p-1  mt-2 mb-5' style={{ color: 'white', border: 'none', borderRadius: "5px", justifyContent: 'center', backgroundColor: '#2f628f', alignItems: 'center', marginLeft: '640px' }}>
          BACK TO HOME
        </button>
      </Link>
      </div>
    </>
  );
}

export default View;
