import React from 'react'
import { data } from '../../../mock/academy'
import { Container, Card, Title, Text } from './style'
const Mentors = () => {
  return (
    <Container className='container '>

      <span className="text-name">Teacher and academies</span>

      <div className="wrapper wrap">
        {data.map(v =>
          <Card key={v.id}>
            <div className="flex">
              <img className='img-mentor' src={v?.img} alt="" />
              <Title>{v?.type}</Title>
            </div>
            <Text >{v?.level}</Text>
            <Text desc='true'>{v?.desc}</Text>
          </Card>
        )}

      </div>
    </Container>
  )
}

export default Mentors