import styled from 'styled-components'
import { ReactComponent as ham } from '../../../assets/svg/v.svg'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-content: center;
position: fixed;
z-index: 99999;
transition: all .3s;
height:${({ offset }) => offset ? '60px' : '100px'};
border-bottom:${({ offset }) => offset && '1px solid rgba(255,255,255,.2)'};
background:${({ offset }) => offset && 'rgba(255,255,255,.05)'};
backdrop-filter: blur(7px);
@media only screen and (max-width: 768px) {
height:50px;
}
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between !important;
span{
  min-width: 250px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 24px;
  gap: 10px;
  line-height: 0;
  font-weight: 500;
}
@media only screen and (max-width: 768px) {span{font-size:16px}}

`

Container.Logo = styled.img`
width: 40px;
height: 40px;
min-width: 35px;
min-height: 35px;
fill: #fff;
@media only screen and (max-width: 768px) {max-height: 20px; max-width: 20px;}
`
Container.Ham = styled(ham)`
display: none;
fill: #fff;
padding: 0;
@media only screen and (max-width: 960px) {display:flex}
`
export const Link = styled.h6`
display: flex;
color: #fff;
font-size: 24px;
gap: 40px;
@media only screen and (max-width: 960px) {
  display: none;
}

`
export const Title = styled.h6`
cursor: pointer;
width: 100%;
font-weight: 500;
display: flex;
color: ${({ id }) => id ? '#DCCA87' : '#fff'};
font-size: 20px;
transition: all .2s;
:hover{transform: scale(1.4);}
`