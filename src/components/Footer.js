import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  margin-top: 50px;
  padding: 30px 40px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .footer-info{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h3{
    font-size: 1.3rem;
  }

  .footer-links ul{
    display: flex;
    list-style-type: none;
    gap: 20px;
  }

  .footer-links ul li a{
    color: inherit;
  }

  @media only screen and (min-width:1000px){
    padding: 50px;
  }

  @media only screen and (min-width:800px){
    padding: 30px;
  }

`

export default function Footer() {
  return (
    <FooterContainer className='footer'>
        <div className='footer-info'><h3>Built by <span style={{color: "#f75b23"}}>Cynthia Amaehule &copy; 2023</span></h3></div>
        <div className='footer-links'>
          <ul>
            <li><a href="https://www.facebook.com/"><FacebookIcon/></a></li>
            <li><a href="https://www.instagram.com/"><InstagramIcon/></a></li>
            <li><a href="https://twitter.com/"><TwitterIcon/></a></li>
          </ul>
        </div>
    </FooterContainer>
  )
}
