import styled from 'styled-components'
import { Image } from 'antd';

export const Container = styled.div`
position: ${({ click }) => !click && 'fixed'};
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
z-index: 999999;
* svg {
  fill: grey;
}
  box-shadow: -20px 0  30px rgba(0,0,0,.9);
  width: 100%;
  display: none;
  right: ${({ click }) => click ? '-100%' : '0'};
  background: #0e0e0f;
  flex-direction: column;
  position: fixed;
  transition: 0.4s;
  z-index: 1000;
  padding:100px 20px 0 20px;
  backdrop-filter: blur(7px);
  h1{
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  a{
    color: grey;
    font-weight: 600;
  }
  .flex{display:flex; width: 100%;max-width:760px; align-items: center; justify-content:start; gap:20px}
  @media only screen and (max-width: 960px) {display: flex;}
  `
export const Img = styled(Image)`
max-width: 70px;
max-height: 70px;
border-radius: 50%;
border: 1px solid #DCCA87;
`

export const Wrapper = styled.div`
width: 100%;
  max-width: 760px;

`

export const Title = styled.h5`
font-size: 24px;
color: ${({ id }) => id ? '#DCCA87' : 'grey'};
margin-top: 25px;
font-weight: 600;
display: flex;
gap: 10px;
align-items: center;
cursor: pointer;
border-bottom: ${({ id }) => id ? '1px solid #DCCA87' : '1px solid grey'};
`
export const Icon = styled.img`
*as svg{

  stroke: ${({ id }) => id ? 'aqua' : 'grey'};
  fill: ${({ id }) => id ? 'aqua' : 'grey'};
}
`