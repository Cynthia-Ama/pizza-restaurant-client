import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Context';

import MenuIcon from '@mui/icons-material/Menu';

const NavCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    width: 100%;

    .navLogo h1{
        font-size: 2.5rem;
        color: #f75b23; 
        font-family: 'Dancing Script', cursive;
    }

    button{
       border: none;
       background-color: transparent;
       color: #f75b23;
       cursor: pointer;
    }

    .navLinks{
        display: none
    }

    ul{
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a{
        text-decoration: none;
        color: inherit;
        font-size: 1.1rem;

        &:hover{
            color: #f75b23;
        }
     }

    @media only screen and (min-width:800px){
        padding: 30px 0;

        .navBtn{
            display: none;
        }

        .navLinks{
            display: flex;
        }

        .navLinks a{
            font-size: 1.3rem;
        }
    }

    @media only screen and (min-width:1000px){
        padding: 50px 0;
        max-width: 1300px;
        margin: 0 auto;
    }

`

const Navbar = () => {

const {opensideBar} = useGlobalContext()

  return (
    <nav>
        <NavCenter>
           <div className='navBtn'>
            <button onClick={opensideBar}><MenuIcon style={{fontSize: "2.5rem"}}/></button>
           </div>
           <div className='navLogo'>
            <Link to={"/"}><h1>BestPizza's</h1></Link>
           </div>
           <div className='navLinks'>
            <ul>
                <li><Link to={'/products'}>Menu</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/cart'}>Cart</Link></li>
            </ul>
           </div>
        </NavCenter>
    </nav>
  )
}

export default Navbar 
