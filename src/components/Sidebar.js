import React from 'react'
import styled from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Context';

const SidebarContainer = styled.div`
  .sidebarContent{
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .sidebarContent button{
    align-self: flex-end;
    background-color: transparent;
    border: none;
    color: #f75b23;
    cursor: pointer;
  }

  .sidebarContent > div{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sidebarContent > div a{
    color: inherit;
    font-size: 1.2rem;
  }

  `

export default function Sidebar() {

const {issidebarOpen, closesideBar} = useGlobalContext()
  return (
    <SidebarContainer className={issidebarOpen ? "sidebar open-sidebar" : "sidebar"}>
      <div className='sidebarContent'>
        <button onClick={closesideBar}><CloseIcon style={{fontSize: "2.5rem"}}/></button>
        <div>
          <Link to={"/"} onClick={closesideBar}>Home</Link>
          <Link to={"/products"} onClick={closesideBar}>Menu</Link>
          <Link to={"/about"} onClick={closesideBar}>About</Link>
          <Link to={'/cart'} onClick={closesideBar}>Cart</Link>
        </div>
      </div>
    </SidebarContainer>
  )
}
