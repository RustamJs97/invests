import React from 'react'
import { Container } from './style'
import bg from '../../assets/img/ani.gif'


const User = () => {
  return (
    <Container>
      <img className='imgs' src={bg} />
      <h1>See information on the {window.location.pathname} page</h1>
    </Container>
  )
}

export default User