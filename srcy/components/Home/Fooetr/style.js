import styled from 'styled-components'
import { ReactComponent as maps } from '../../../assets/svg/maps.svg'
import { ReactComponent as mail } from '../../../assets/svg/mail.svg'
import { ReactComponent as call } from '../../../assets/svg/call.svg'
import { ReactComponent as telegram } from '../../../assets/svg/telegram.svg'
import { ReactComponent as tw } from '../../../assets/svg/tw.svg'
import { ReactComponent as insta } from '../../../assets/svg/insta.svg'
import { ReactComponent as ins } from '../../../assets/svg/in.svg'

export const Container = styled.div`
width: 100%;
display: flex;
background: #080808;
color: white;
border-top: 1px solid #222;
.span{display: flex; gap:10px; margin:7px 0; cursor: pointer;}
* svg:hover {
  cursor: pointer;
  transition: all .3s;
}
@media only screen and (max-width: 768px) {
background: #0e0e0f;
border-top: 1px solid rgba(255,255,255,.2);
.span{margin-bottom:100px}
* svg{
  width: 40px;
  height: 40px;
}
}

  `
export const Wrapper = styled.div`
@media only screen and (max-width: 1320px) {
flex-wrap: wrap;
}
@media only screen and (max-width: 768px) {
flex-direction: column;
}
`

export const Card = styled.div`
width: 400px;
height: 280px;
border-radius: 15px;
display: flex;
flex-direction: column;
transition: all .3s;
margin-top: 30px;
@media only screen and (max-width: 1320px) {
width: ${({ end }) => end ? '100%' : '450px'};
height: ${({ medium }) => medium && '200px'};
}
@media only screen and (max-width: 960px) {
width: 100%;
}
@media only screen and (max-width: 768px) {
}
  `
export const Title = styled.h6`
color:  silver;
display: flex;
align-items: center;
font-weight: 900;
font-size: 35px;
font-weight: 800;
@media only screen and (max-width: 768px) {font-size: 24px; margin-bottom: 0;}

`
export const Text = styled.a`
display: flex;
align-items: center;
text-decoration: none;
font-weight: 900;
font-size: ${({ desc }) => desc ? '16px' : '24px'};
color: ${({ desc }) => desc ? 'grey' : '#fff'};
line-height: ${({ desc }) => desc ? '40px' : '45px'};
border-bottom: ${({ desc }) => desc && '1px solid #5555'};
border-bottom: ${({ s }) => s && 'none'};
width: 400px;
gap: 10px;
:hover{
  color: ${({ desc }) => desc ? 'grey' : '#fff'};

}
@media only screen and (max-width: 1320px) {
  width: 450px;
}
@media only screen and (max-width: 960px) {
  width: 100%;
}
@media only screen and (max-width: 768px) { font-size: ${({ desc }) => desc ? '12px' : '20px'};gap:0}

`
Card.Maps = styled(maps)`fill: #fff;@media only screen and (max-width: 768px) {  margin-top: 15px;}`
Card.Mail = styled(mail)`fill: #fff;@media only screen and (max-width: 768px) {  margin-top: 15px;}`
Card.Call = styled(call)`fill: #fff;@media only screen and (max-width: 768px) {  margin-top: 15px;}`
Card.Telegram = styled(telegram)`fill:#4444;width: 50px;height:50px; border: 1px solid #7777; border-radius:50%; :hover{box-shadow: 0 0 15px -7px rgba(255,255,255,.46); transform: scale(1.05)};`
Card.Tw = styled(tw)`fill:#4444; width: 50px;height:50px; border: 1px solid #7777; border-radius:50%; :hover{box-shadow: 0 0 15px -7px rgba(255,255,255,.46); transform: scale(1.05);}`
Card.Insta = styled(insta)`fill:#4444;width: 50px;height:50px; border: 1px solid #7777; border-radius:50%; :hover{box-shadow: 0 0 15px -7px rgba(255,255,255,.46); transform: scale(1.05);}`
Card.Ins = styled(ins)`fill:#4444;width: 50px;height:50px; border: 1px solid #7777; border-radius:50%; :hover{box-shadow: 0 0 15px -7px rgba(255,255,255,.46); transform: scale(1.05);}`

