import React from 'react'
import pc from '../../../assets/img/pc.png'
import { Button } from '../Header/style'
import { Container, Wrapper, Card, Title, Text } from './style'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const changeCol = arg => {
    localStorage.setItem('id', 4)
    navigate('./UserInfo')
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }
  const navigate = useNavigate()
  return (
    <Container className='container '>

      <div className="text-name">User Info</div>
      <div className="wrapper">
        <Wrapper >
          <img src={pc} className='img-user' alt="" />
          <Card>
            <Title>Muhammadov Rustam</Title>
            <Text >Frond End developer </Text>
            <Text desc='true'>real CRUD va Api bilan ishlaganman. Ingiliz tilini hozirda o'rganyapman.
              Ishlashimdan maqsadim: olgan ilmimni bexuda qoldirmaslik.
            </Text>
            <Text desc='true'>www.yoqut.uz web sayt muallifi 100% o'zim</Text>
            <Button onClick={changeCol} mt='30px'>batafsil</Button>
          </Card>
        </Wrapper>

      </div>
    </Container>
  )
}

export default User