import React from "react"
import { data } from '../../../mock/carousel'
import { Container, Title, Carousels, Button } from './style'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 768, itemsToShow: 3, itemsToScroll: 2, },
  { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
  { width: 1450, itemsToShow: 5, itemsToScroll: 4, },
  { width: 1750, itemsToShow: 6, },
]

const Portfolio = () => {
  return (
    <Container className='container '>
      <span className="text-name">Portfoilo</span>

      <div className="wrapper">
        <Carousels breakPoints={breakPoints}>
          {data.map(v => <Title key={v.id}>{v.title}</Title>)}
        </Carousels>
      </div>
    </Container >
  )
}

export default Portfolio