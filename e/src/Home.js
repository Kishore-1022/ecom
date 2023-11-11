import React from 'react';
import Cart from './Cart';
import { useState } from 'react';
import { Navbar, Container,Nav, Button, Row, Col,Card} from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);
   const [cart,setCart]=useState([])

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const addHandler=(id)=>{
    const item=productsArr.filter(item=>item.id===id)
    setCart(prev=>[...prev,item[0]])
}
  const productsArr = [
    {
      id:1,

      title: 'Colors',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      
      },
      
      {
      id:2,
      
      title: 'Black and white Colors',
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      },
      
      {
      id:3,
      
      title: 'Yellow and Black Colors',
      
      price: 70,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      
      },
      
      {
      id:4,

      title: 'Blue Color',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      
      }
      
      ]
  return (
    <>
        <Navbar bg="dark" expand="sm" className='col'>
            <Container className='d-flex'>
                <div className='d-flex w-50 justify-content-around'>
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#features">STORE</Nav.Link>
                <Nav.Link href="#pricing">ABOUT</Nav.Link>
                </div>
               
                <div className=''>  <Button onClick={handleShow}>Cart</Button></div>
                
            </Container>
        </Navbar>
        <Navbar bg='secondary' expand='lg'  className='d-flex justify-content-center'>
            <h1 className='secondnav'>The Generics</h1>
        </Navbar>
        <div className='text-center font-italic fw-bolder fs-2'>Music</div>
        <Container  >
                <Row className='mx-6'>
                  {productsArr.map(item=>(
                    <Col>
                        <Card style={{ width: '14rem'}} className='m-2' >
                            <Card.Title className='text-center fw-bolder'>{item.title}</Card.Title>
                            <Card.Img variant="top" src={item.imageUrl} /><br/>
                            <div className='d-flex w-100 justify-content-around'>
                            <Card.Text className='fs-3 fw-bold'>${item.price}</Card.Text>
                            <Button variant="primary" className="mb-3 " onClick={()=>addHandler(item.id)} >ADD TO CART</Button>
                            </div>                     
                        </Card>                        
                    </Col>  
                   ))}
                </Row>
            </Container>
            <Cart show={show} handleClose={handleClose} cart={cart} />
        
    </>
    
  )
}

export default Home