import React, { useEffect } from 'react'
import styled from 'styled-components'
import BigPizza from '../assets/BigPizza.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useGlobalContext } from '../components/Context'
import axios from 'axios'
import Loading from '../components/Loading'

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 40px;
  width: 100%;

  .single-image{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .single-image img{
    width: 70%;
    object-fit: cover;
    border-radius: 3px;
  }

  .single-content{
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100%;
  }

  .single-content h1{
    text-transform: capitalize;
  }

  .single-content > h4{
    font-size: 1.5rem;
  }

  .single-content > p{
    font-size: 1.1rem;
    line-height: 29px;
  }

  .single-content-size{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .size-one, .size-two{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .size-one img{
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .size-two img{
    width: 110px;
    height: 110px;
    object-fit: cover;
  }

  .single-content-extras{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    width: 100%;
  }

  .single-content-extras > div{
    display: flex;
    gap: 5px;
  }

  .single-content-span{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .single-content-span span{
    font-size: 1.6rem;
  }

  .single-content > a{
    background-color: #f75b23;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;
  }

  @media only screen and (min-width:800px){
    padding: 30px 0;
    flex-direction: row;
    gap: 30px;

    .single-image, .single-content{
      flex: 1;
    }

    .single-content{
      align-items: flex-start;
      gap: 15px;
    }
  }

  @media only screen and (min-width:1000px){
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
  }
`


const Single = () => {
  
  const { AddtoCart, loading, setloading } = useGlobalContext()
  const location = useLocation()
  const productId = location.pathname.split("/")[2]
  const [product, setproduct] = useState()
  const [actualprice, setactualprice] = useState()

  useEffect(()=>{
    async function fetchPost(){
      try {
        setloading(true)
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${productId}`)
        const data = await res.data
        setproduct(data)
        setactualprice(data.price[0])
        setloading(false)
      } catch (error) {
        console.log(error)
      }

    }
    fetchPost()
  },[productId])


  const [size, setsize] = useState(0)
  console.log(actualprice)

  function handleSize(sizeIndex){
    const diff = product?.price[sizeIndex] - product?.price[size]
    setsize(sizeIndex)
    changePrice(diff)
  }

  function changePrice(num){
   setactualprice(actualprice + num)
  } 

  function handleChange(e, option){
    const checked = e.target.checked
    if (checked){
      changePrice(option.price)
    }
    else{
      changePrice(-option.price)
    }
  }

  if (loading){
    return (
      <Loading/>
    )
  }

  return (
    <SingleContainer>
      <div className='single-image'>
        <img src={product?.img} alt="pizza" />
      </div>
      <div className='single-content'>
        <h1>{product?.title}</h1>
        <h4><span>$</span>{actualprice}</h4>
        <p>{product?.desc}</p>
        <div className='single-content-size'>
          <div className='size-one'>
            <h3>Regular</h3>
            <img src={BigPizza} alt={product?.title} style={{cursor: 'pointer'}} onClick={()=>{
              handleSize(0)
            }}/>
          </div>
          <div className='size-two'>
            <h3>Big</h3>
            <img src={BigPizza} alt={product?.desc} style={{cursor: 'pointer'}} onClick={()=>{
              handleSize(1)
            }}/>
          </div>
        </div>
        <div className='single-content-extras'>
          {product?.extraOptions.map((option, index)=>{
            return (
              <div key={index}>
                <input type="checkbox" name={option.text.toLowerCase()} id={option.text.toLowerCase()} onClick={(e)=>{
                  handleChange(e, option)
                }}/>
                <label htmlFor={option.text.toLowerCase()}>{option.text}</label>
            </div>
            )
          })}
        </div>
        <Link to={'/cart'} onClick={()=>{
          AddtoCart(product._id, product.title, product.img, product.count, actualprice)
        }}>Add to Cart</Link>
      </div>
    </SingleContainer>
  )
}

export default Single 
