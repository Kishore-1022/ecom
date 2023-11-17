import React from 'react'
import { Outlet } from 'react-router-dom';
import { Button, Container, Nav,Navbar,Badge } from 'react-bootstrap';

const Header = (props) => {
  return (
    <>
    <Navbar bg="dark" expand="sm" className='col'>
            <Container className='d-flex'>
                <div className='d-flex w-50 justify-content-around'>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="#features">STORE</Nav.Link>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                </div>
               
                <div className='d-flex'>  
                  <Button onClick={props.handleShow}>Cart <Badge bg='secondary'></Badge></Button>
                  
                </div>
                
            </Container>
        </Navbar>
        <Outlet/>
    </>
    
  )
}

export default Header