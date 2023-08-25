import React from 'react'
import Image1 from '../assets/Pizza.jpeg'
import Image2 from '../assets/Pizza2.jpeg'
import Image3 from '../assets/Pizza3.jpeg'
import styled from "styled-components"

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 50px;

  h1{
    text-transform: capitalize;
    text-align: center;
    font-size: 2.7rem;
    color: #f75b23;
  }

  p{
    line-height: 29.5px;
    text-align: center;
    font-size: 1.1rem;
  }

  .featured-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .featured{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .featured img{
    width: 70%;
    object-fit: cover;
  }

  @media only screen and (min-width:800px){
    p{
      font-size: 1.3rem;
    }
    
    .featured-container{
      flex-direction: row;
      gap: 20px;
    }

    .featured{
      flex: 1;
    }

    .featured img{
      width: 100%
    }
  }
`

export default function Featured() {
  return (
    <FeaturedContent>
      <h1>Featured</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores qui tenetur temporibus quasi repellendus quaerat fugiat quod totam tempora consequuntur ut rem iure exercitationem atque voluptatem, tempore perferendis repudiandae.</p>
      <div className='featured-container'>
        <div className='featured'>
            <img src={Image1} alt="pizza" />
        </div>
        <div className='featured'>
            <img src={Image2} alt="pizza" />
        </div>
        <div className='featured'>
            <img src={Image3} alt="pizza" />
        </div>
      </div>
    </FeaturedContent>
  )
}
