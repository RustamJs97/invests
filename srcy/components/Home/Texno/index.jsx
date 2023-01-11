import React from 'react'
import { data } from '../../../mock/portfolio'
import { Container, Card, Title, Text } from './style'
import logo from '../../../assets/img/newlogo.png'

const Navbar = () => {
  return (
    <Container className='container '>

      <div className="text-name">Knowledge and skills</div>

      <div className="wrapper wrap">
        {data.map((v, i) =>
          <Card i={i % 2}>
            <Title><Text.logo src={logo} /> {v.type}</Title>
            <img className='img-card' src={v.img} alt="" />
            <Text >{v.level} developer</Text>
            <Text desc='true'>tajribam {v.desc}</Text>
          </Card>
        )}

      </div>
    </Container>
  )
}

export default Navbar