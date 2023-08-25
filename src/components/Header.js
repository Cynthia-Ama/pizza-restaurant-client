import React from 'react'
import styled from "styled-components"
import Img from '../assets/Pizza.jpeg'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    .header-content, .header-image{
      flex: 1;
    }

    .header-image{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-content{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        text-align: center;
    }

    .header-content h1{
       font-size: 3rem;
       color: #f75b23;
    }

    .header-content p{
        font-size: 1.15rem;
        line-height: 29.5px;
     }

     .header-content button{
       border: none;
       padding: 10px 20px;
       background-color: #f75b23;
       color: white;
       border-radius: 20px;
       font-size: 1.1rem;
     }

    .header-image img{
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
     }
     
     @media only screen and (min-width:800px){
        flex-direction: row;

        .header-content{
            flex: 1;
            align-items: flex-start;
        }

        .header-image{
            flex: 1;
        }

        .header-content{
            text-align: justify;
        }

        .header-content p{
          font-size: 1.3rem;
        }

        .header-image{
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-image img{
          width: 100%;
        }

      }
`

export default function Header() {
  return (
    <HeaderContainer>
      <div className='header-content'>
        <h1>The tastiest & Best Pizzas in the world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nobis officiis nesciunt provident necessitatibus iusto libero nostrum reprehenderit ratione nisi minus nam est illum praesentium?
        </p>
        <Link to={"/products"}><button style={{cursor: "pointer"}}>View Menu</button></Link>
      </div>
      <div className='header-image'>
        <img src={Img} alt="pizza" />
      </div>
    </HeaderContainer>
  )
}
