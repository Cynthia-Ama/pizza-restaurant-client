import React, { useState } from 'react'
import styled from "styled-components"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../components/Context';
import ModalContainer from '../components/ModalContainer'


const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  width: 100%;

  .cartContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .cart-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    width: 100%;
  }

  .cart-content-one{
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .image{
    width: 200px;
    height: 100px;
  }

  .image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cart-content-info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .cart-content-two{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-totals{
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 70px;
    width: 100%;
  }

  .cart-totals > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-totals > div h3{
    font-size: 1.5rem;
  }

  .cart-totals > div p{
    font-size: 1.3rem;
  }

  .cart-totals button{
    align-self: center;
    width: max-content;
    border: none;
    padding: 10px 20px;
    background-color: #f75b23;
    color: white;
    border-radius: 3px;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .checkout{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .checkout-button{
    border: none;
    padding: 10px 20px;
    background-color: #f75b23;
    color: white;
    border-radius: 3px;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .checkout-payments{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .checkout-payments button{
    &:first-child{
      border: none;
      padding: 10px 20px;
      background-color: #f75b23;
      color: white;
      border-radius: 3px;
      font-size: 1.1rem;
    }

    cursor: pointer;
  }

  .cart-content-two > span{
    font-size: 16px;
  }

  @media only screen and (min-width:800px){
    padding: 30px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;

    .cartContainer{
      flex: 2;
    }

    .checkout{
      flex: 1;
      gap: 30px;
      align-items: flex-start;
    }
  }

  @media only screen and (min-width:1000px){
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
  }`

const Cart = () => {
  const [openModal, setopenModal] = useState(false)
  const [openPayment, setopenPayment] = useState(false)

  const {cart, increaseCart, decreaseCart, clearCart, removeItem, total} = useGlobalContext()

  if (cart.length === 0){
    return (
      <div className='cartEmpty'>
        <h2>Your cart is currently empty.</h2>
        <Link to={'/products'}>Add to Cart</Link>
      </div>
    )
  }


  return (
    <CartContainer>
      <div className='cartContainer'>
          {
            cart?.map((item)=>{
              const {id, title, img, count, price} = item
              return (
              <div className='cart-content' key={id}>
                <div className='cart-content-one'>
                  <div className='image'>
                    <img src={img} alt="pizza" />
                  </div>
                  <div className='cart-content-info'>
                    <h3>{title}</h3>
                    <h4><span>$</span>{price}</h4>
                    <p style={{cursor: "pointer"}} onClick={()=>removeItem(id)}>remove</p>
                  </div>
                </div>
                <div className='cart-content-two'>
                  <span style={{cursor: "pointer"}} onClick={()=>increaseCart(id)}><KeyboardArrowUpIcon/></span>
                  <span style={{fontSize: "1.5rem"}}>{count}</span>
                  <span style={{cursor: "pointer"}} onClick={()=>decreaseCart(id)}><KeyboardArrowDownIcon/></span>
               </div>
              </div>
              )
            })
          }
        <div className='cart-totals'>
          <div>
            <h3>Total</h3>
            <p><span>$</span>{total}</p>
          </div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
      <div className='checkout'>
        <h1>Cart Total</h1>
        <h3>Subtotal: <span>$ {total}</span></h3>
        <h3>Total : <span>$ {total}</span></h3>
        <button onClick={()=>{
          setopenPayment(!openPayment)
        }} className='checkout-button'>Checkout</button>
        {openPayment &&  
        <div className='checkout-payments'>
          <button onClick={()=>{
            setopenModal(true)
          }}>Pay on Delivery</button>
        </div>
        }
      </div>
      {openModal && <ModalContainer/>}
    </CartContainer>
  )
}

export default Cart
