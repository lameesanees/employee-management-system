import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


function Admin() {

  const baseUrl = 'http://localhost:8000'

  const [employeeData, setEmployeeData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`${baseUrl}/api/get-all-employee`)
    console.log(response.data.employees)
    setEmployeeData(response.data.employees)
  }
  console.log(employeeData)

  useEffect(() => {
    fetchData();
  }, [])

  // delete employee
  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/api/delete-employee/${id}`);
    alert("deleted successfully")
    // After deletion, fetch updated data
    fetchData();
  };
  return (
    <>
      <div style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/019/551/675/original/abstract-blue-light-lines-on-purple-background-abstract-wave-background-for-computer-wallpaper-and-landing-page-free-vector.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
        <div className='w-100 d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
          <div className="row p-5 shadow">
            <div className="col d-flex flex-column justify-content-center text-white">
              <h1>Employee Management System</h1>
              <p>
                Manage your workforce effortlessly with our Employee Management System. Streamline scheduling, track attendance, and simplify payroll.
                Tailored for businesses of all sizes, our platform boosts productivity and engagement.
                Experience intuitive HR management today!
              </p>
              <Link to="/add">
                <button className='p-1 mt-5 mb-5' style={{ color: 'white', width: '10%', border: 'none', borderRadius: "5px", justifyContent: 'center', backgroundColor: '#2f628f', alignItems: 'center' }}>
                  GET STARTED
                </button></Link>
            </div>
          </div>
        </div>

        <div className="mt-3 p-5 " style={{ backgroundColor: '#7061cf',borderRadius:"5px" }}>
          <h3 className='text-white' style={{ fontFamily: "sans-serif", fontSize: '25px', textAlign: 'center' }}>A Revolutionary Employment Management System</h3>
          <Link to='/add'>
            <button className='p-1 mt-5 mb-5' style={{ color: 'white', border: 'none', borderRadius: "5px", backgroundColor: '#2f628f', marginLeft: '650px' }}>
              CHECK IT NOW
            </button></Link>
          <p style={{ fontFamily: 'sans-serif', textAlign: 'center', color: "white" }}>30 days free trail. No credit card required.</p>
        </div>

        <div className=' mt-1 p-5'>
          <Row className='p-5'>
            <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif',color:"white" }}>Manage Your Employees</h2>
            <Link to='/add'>
              <button className='p-1' style={{ border: 'none', backgroundColor: '#3772ad', marginLeft: '100%' }}>
                <i className="fa-solid fa-circle-plus fa-xl " ></i>
              </button>
            </Link>

            {
              employeeData.map((item) => (
                <Col>
                  <Card style={{ width: '15rem', marginBottom: '20px' }} className='card'>
                    <ListGroup variant="flush" >
                      <ListGroup.Item style={{ textAlign: 'center', fontFamily:"serif", fontSize: 'large' }}>
                        <strong>{item.Name}</strong>
                      </ListGroup.Item>
                      <ListGroup.Item style={{ textAlign: 'center', fontFamily: 'sans-serif'}}>{item.Designation}</ListGroup.Item>
                      <ListGroup.Item >
                        <Link to={`view/${item.Id}`}> <button className='btn' style={{ marginLeft: "20px" }}><i className='fa-solid fa-eye text-primary' ></i></button></Link>
                        <Link to = {`edit/${item.Id}`}>
                        <button className='btn'><i className='fa-solid fa-pen text-success'></i></button>
                        </Link>
                        <Link><button className='btn'onClick={() => handleDelete(item.Id)} ><i className='fa-solid fa-trash text-danger'></i></button></Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              ))}
          </Row >
        </div>
      </div>

    </>
  )
}

export default Admin
