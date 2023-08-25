import React from 'react'
import styled from "styled-components"

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 30px;
    width: 100%;
  
    .about-image{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .about-image img{
      width: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  
    .about-content{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .about-content p{
      line-height: 29px;
      font-size: 1.1rem;
    }
  
    @media only screen and (min-width:800px){
      padding: 30px 0;
      flex-direction: row;
      align-items: flex-start;
      gap: 40px;
  
      .about-image, .about-content{
        flex: 1;
      }
  
      .about-image img{
        width: 100%;
        height: 500px;
      }
    }
  
    @media only screen and (min-width:1000px){
      padding: 50px 0;
      max-width: 1200px;
      margin: 0 auto;
    }

    `

const About = () => {
  return (
    <AboutContainer>
        <div className='about-image'>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="woman" />
        </div>
        <div className='about-content'>
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse deserunt ut reprehenderit hic, tempora pariatur repudiandae unde. Autem alias consectetur magni tempore corrupti perspiciatis, odio exercitationem iusto ea minima numquam vitae neque obcaecati eum id tempora dolorum quis consequuntur delectus! Quis excepturi omnis repudiandae error, quaerat qui labore nostrum in?</p>
        </div>
    </AboutContainer>
  )
}

export default About
