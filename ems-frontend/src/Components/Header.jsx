import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
   <MDBNavbar light className='text-center text-white' style={{backgroundColor:"#7061cf",boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i className="fa-solid fa-compass fa-lg fa-beat" style={{color:"white",marginLeft:'20px'}}></i>
          &nbsp;&nbsp;&nbsp;
            <h1 className='header' >  TEAMTREK EMS</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
