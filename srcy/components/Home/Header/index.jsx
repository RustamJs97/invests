import React, { useState } from 'react'
import { headers } from '../../../mock/header'
import { Container, Wrapper, Title, Button } from './style'

const Header = () => {

  return (
    <Container >
      <div className="container">

        <Wrapper className="wrapper">
          <Title>
            <Title.Text>{headers.text} {headers.text2}</Title.Text>
            <Title.Desc>{headers.title}</Title.Desc>
            <Title.P>{headers.desc}</Title.P>
            <div className="flex-btn">

              <a target="_blank" href="https://t.me/webbrain_academy"><Button right='true'>Web Brain</Button></a>
              <a target="_blank" href="https://t.me/reacthook" ><Button>Script One</Button></a>

            </div>
          </Title>
          <Wrapper.Logo />
        </Wrapper>
      </div>
    </Container >
  )
}

export default Header