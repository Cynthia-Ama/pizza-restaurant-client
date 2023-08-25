import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import Cash from '../assets/Cash.png'
import Cooking from '../assets/Cooking.png'
import OntheWay from '../assets/OntheWay.png'
import Delivered from '../assets/Delivered.png'
import {useGlobalContext} from '../components/Context'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const OrderContainer = styled.div `
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding: 40px;
    gap: 60px;
    width: 100%;

    .order-details h1{
        margin-bottom: 30px;
    }

    .order-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    .order-content > div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .order-status{
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 20px;
    }

    .order-status > div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .order-status > div img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    .order-totals{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .order-totals > button{
        width: max-content;
        padding: 8px 15px;
        background-color: transparent;
        border: none;
        background-color: gray;
        color: white;
        border-radius: 3px;
        letter-spacing: 1px;
    }

    @media only screen and (min-width:800px){
        padding: 30px 0;
        flex-direction: row;
        justify-content: space-between;

        .order-details, .order-totals{
            flex: 1;
        }

        .order-content{
            flex-direction: row;
            gap: 50px;
        }

        .order-content > div{
            flex-direction: column;
        }

        .order-totals{
            align-items: center;
        } 
      }
  
      @media only screen and (min-width:1000px){
        padding: 50px 0;
        max-width: 1200px;
        margin: 0 auto;
      }
`


export default function Order() {
const [orderInfo, setorderInfo] = useState()
const location = useLocation()
const id = location.pathname.split("/")[2]
const navigate = useNavigate()

useEffect(()=>{
    async function fetchData(){
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/${id}`)
            const data = await res.data
            setorderInfo(data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
},[id])

function endofAnimation(){
    navigate("/")
}

const {total} = useGlobalContext()


  return (
    <OrderContainer>
        <div className='order-details'>
            <h1>Your Orders</h1>
            <div className='order-content'>
                <div>
                    <h3>OrderID</h3> 
                    <span>{orderInfo?._id}</span>
                </div>
                <div>
                    <h3>Name</h3> 
                    <span>{orderInfo?.customername}</span>
                </div>
                <div>
                    <h3>Address:</h3> 
                    <span>{orderInfo?.address}</span>
                </div>
                <div>
                    <h3>Price</h3> 
                    <span>$<span>{total}</span></span>
                </div>
            </div>
            <div className='order-status'>
                <div>
                    <img src={Cash} alt="cash" />
                    <span>Paid </span>
                </div>
                <div className="order-animate">
                    <img src={Cooking} alt="cooking" />
                    <span>Preparing</span>
                </div>
                <div className="order-animate">
                    <img src={OntheWay} alt="bicycle rider" />
                    <span>On the way</span>
                </div>
                <div className="order-animate" onAnimationEnd={endofAnimation}>
                    <img src={Delivered} alt="delivered" />
                    <span>Delivered</span>
                </div>
            </div>
        </div>
        <div className='order-totals'>
            <h1>Cart Total</h1>
            <h3>Subtotal: <span>$ {total}</span></h3>
            <h3>Total: <span>$ {total}</span></h3>
            <button disabled>PAID</button>
        </div>
    </OrderContainer>
  )
}


