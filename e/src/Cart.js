import React from 'react';
import { Offcanvas , Button } from 'react-bootstrap';

const Cart = (props) => {
  return (
    
        <>
         <Offcanvas show={props.show} onHide={props.handleClose} placement="end" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='fs-3 fw-bolder m-auto'>CART</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='w-100 '>
              <div className="d-flex justify-content-around ">
                <div className='border-bottom border-black border-3'>ITEM</div>
                <div className='border-bottom border-black border-3'>PRICE</div>
                <div className='border-bottom border-black border-3'>QUANTITY</div>
              </div>
              {props.cart.map(i=>(
                <div className='d-flex justify-content-between'>
                    <img src={i.imageUrl} width='100px' height='100px'/>
                    <div>{i.title}</div>
                    <div>{i.price}</div>
                    <div>
                         <Button variant='danger'>Remove</Button>
                    </div>
                </div>
    
              ))}
              <div className='w-100 text-end mt-1 fw-bolder'>Total: 0</div>
              <Button className='mt-5 w-100'>Purchase</Button>
             
            </Offcanvas.Body>
           
          </Offcanvas>
        </>
      )
  
}

export default Cart