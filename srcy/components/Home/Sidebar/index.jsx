import React from 'react'
import { Icon, Container, Wrapper, Img, Title } from './style'
import { useNavigate } from 'react-router-dom'
import { Fals } from '../../../mock/context'
import cards from '../../../assets/img/user.jpg'
import { navbarUtils } from '../../../utilits/navbar'


const Sidebar = () => {

  const [click, setClick] = Fals()
  const navigate = useNavigate()

  const changeColor = arg => {
    navigate(`${arg.path}`)
    setClick(!click)
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }

  return (
    <Container click={click}>
      <span className="flex">
        <Img src={cards} alt="Y A" />
        <span>
          <h1> MuhammdaRustam</h1>
          <a href='tel:+ 998 99 676 24 25'>+ 998 99 676 24 25</a>
        </span>
      </span>
      <Wrapper>
        {
          navbarUtils.map((arg) =>
            <Title key={arg.id} onClick={() => changeColor(arg)} id={arg.path == window.location.pathname} ><Icon src={arg.img} /> {arg.title}</Title>)
        }
      </Wrapper>
    </Container >
  )
}

export default Sidebar