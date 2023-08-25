import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import axios from 'axios'
import { useGlobalContext } from '../components/Context';
import Loading from '../components/Loading';

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 40px;
    width: 100%;

    h1{
        text-align: center;
        color: #f75b23;
        font-size: 2.4rem;
        margin-bottom: 20px; 
    }

    .products{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .product{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        position: relative;
        cursor: ponter;

        &:hover .product-overlay{
            display: flex;
        }
    }

    .product-image{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .product-image img{
        width: 100%;
        object-fit: cover;
    }

    .product-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .product-content h3{
        font-size: 2rem;
    }

    .product-content h4{
        font-size: 1.5rem;
    }

    .product-content p{
        font-size: 1.1rem;
        line-height: 28px;
    }

    .product-overlay{
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }

    .product-overlay button{
        border: none;
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        color: #f75b23;
    }

    @media only screen and (min-width:800px){
        padding: 30px 0;

        .products{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 35px;
        }

        .product-image img{
            width: 100%;
            height: 100%;
        }

        .product-overlay{
            top: 25%;
            left: 50%;
        }
      }
  
      @media only screen and (min-width:1000px){
        max-width: 1200px;
        margin: 0 auto;
      }


`

export default function Products() {
    const {loading, setloading} = useGlobalContext()
    const [posts, setposts] = useState([])

    useEffect(() => {

        async function fetchaData(){
            try {
                setloading(true)
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
                console.log(res.data)
                setposts(res.data)
                setloading(false)
                
            } catch (error) {
                console.log(error)
            }

        }
       fetchaData()
    }, [])


if (loading){
    return (
        <Loading/>
    )
}

  return (
    <ProductsContainer>
        <h1>Our Products</h1>
        <div className='products'>
            {
                posts?.map((post) => {
                    const {_id, title, img, desc, price} = post
                    return (
                        <div className='product' key={_id}>
                            <div className='product-image'>
                                <img src={img} alt={img} />
                            </div>
                            <div className='product-content'>
                                <h3>{title}</h3>
                                <h4><span>$</span> {price[0]}</h4>
                                <p>{desc}</p>
                            </div>
                            <div className='product-overlay'>
                                <Link to={`/products/${_id}`}><button><LocalPizzaIcon/></button></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </ProductsContainer>
  )
}
