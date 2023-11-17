import React from 'react';
import Cart from './Cart';
import { useState } from 'react';
import { Navbar, Container, Button, Row, Col,Card} from "react-bootstrap";


const Home = () => {
  const [show, setShow] = useState(false);
   const [cart,setCart]=useState([])

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   
  const productsArr = [
    {
      id:1,

      title: 'Colors',

      quantity: 1,
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      
      },
      
      {
      id:2,
      
      title: 'Black and white Colors',

      quantity: 1,
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      },
      
      {
      id:3,
      
      title: 'Yellow and Black Colors',

      quantity: 1,
      
      price: 70,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      
      },
      
      {
      id:4,

      title: 'Blue Color',

      quantity: 1,
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      
      }
      ]
      const addHandler=(id)=>{
        const item=productsArr.find(item=>item.id===id);
        const existingItem = cart.findIndex((i)=>i.id===id);
        if(existingItem!==-1){
          setCart(prev=>{
            let avail=[...prev]
            avail[existingItem]={...item,
              quantity:item.quantity+1
            }
            return avail
          })
        } else{
          setCart((prev)=>[...prev,item]);
        }
      };
      const remover=(id)=>{

        const decrease = cart.map(i=>{
          if(i.id===id & i.quantity>1){
            return {...i,quantity:i.quantity-1}
          }else if(i.id===id & i.quantity===1){
            return null
          }else{
            return i
          }
        })
        
        const updatedCart= decrease.filter((item)=>item!==null);
        setCart(updatedCart)
      }

        


  return (
    <>
        
        <Navbar bg='secondary' expand='lg'  className='d-flex justify-content-center'>
            <h1 className='secondnav'>The Generics</h1>
        </Navbar>
        <div className='text-center font-italic fw-bolder fs-2'>Music</div>
        <Container  >
                <Row className='mx-6'>
                  {productsArr.map(item=>(
                    <Col>
                        <Card style={{ width: '14rem'}} className='m-2' >
                            <Card.Title className='text-center fw-bolder text-nowrap'>{item.title}</Card.Title>
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
            <Cart show={show} handleClose={handleClose} cart={cart}  remover={remover}/>
        
    </>
    
  )
}

export default Home