import React from 'react'
import styled from "styled-components"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const WhyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;

    h1{
        text-align: center;
        font-size: 2.7rem;
        text-transform: capitalize;
        color: #f75b23;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .container > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
    }

    .container > div span{
        color: #f75b23;
    }

    @media only screen and (min-width:800px)
    {
        gap: 60px;
        
        .container{
            flex-direction: row;
            gap: 20px;
        }

        .container > div h3{
            font-size: 1.5rem;
        }

        .container > div p{
            font-size: 1.3rem;
        }
    }
    
    `



const WhyUs = () => {
  return (
    <WhyContainer>
      <h1>Why we are the best?</h1>
      <div className='container'>
        <div>
            <span><LocalPizzaIcon/></span>
            <h3>Fresh Food</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, cumque?</p>
        </div>
        <div>
            <span><RestaurantIcon/></span>
            <h3>Best Taste</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, cumque?</p>
        </div>
        <div>
            <span><DeliveryDiningIcon/></span>
            <h3>On Time Delivery</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, cumque?</p>
        </div>
      </div>
    </WhyContainer>
  )
}

export default WhyUs 
