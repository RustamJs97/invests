import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Fooetr'
import { Fals } from '../../../mock/context'
import { navbarUtils } from '../../../utilits/navbar'
import { Container, Wrapper, Link, Title, Lang } from './style'
import logo from '../../../assets/img/newlogo.png'
import { Back } from '../../../router/style'

const Navbar = () => {
  const [click, setClick] = Fals()
  const navigate = useNavigate()


  const changeColor = arg => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    navigate(arg.path)
  }

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const config = {
    text: "回到顶部",
    topDistance: 10,
  }
  return (
    <div>
      <Back text='↑' fontSize='30px' hover={''} background='rgba(10,10,10,.9)' config={config} />
      <Container offset={offset >= 40}>
        <Wrapper className="wrapper">
          <span> <Container.Logo src={logo} /> Yoqut Academy</span>
          <Link>
            {navbarUtils.map(arg => <Title key={arg.id} onClick={() => changeColor(arg)} id={arg.path == window.location.pathname}>{arg.title}</Title>)}
          </Link>
          <Container.Ham onClick={() => setClick(!click)} />
        </Wrapper>
      </Container>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar