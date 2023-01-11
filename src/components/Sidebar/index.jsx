import React, { useState } from 'react'
import { Container, Item, Logo } from './style'
import logo from '../../assets/img/logo.png'
import { eside } from '../../mock/sidebar'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  console.log(window.location.pathname, 'desc');
  const navigate = useNavigate()
  const handleClick = arg => {
    navigate(`${arg.path}`)
  }
  return (
    <Container>
      <Logo>
        <img className='logo' src={logo} alt="logo" />
        <span>
          <h1>Fast Food</h1>
          <h2>Online maxsulot sotuvi</h2>
        </span>
      </Logo>
      {eside.map(v => <Item key={v.id} active={window.location.pathname === v.path} onClick={() => handleClick(v)}><img src={v.icon} />{v.title}</Item>)
      }
    </Container >
  )
}

export default Sidebar