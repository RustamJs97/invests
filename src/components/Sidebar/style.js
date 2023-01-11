import styled from 'styled-components'

export const Container = styled.div`
max-width: 300px;
min-width: 300px;
height: 100vh;
background-color: #fff;
z-index: 999;
position: sticky;
top: 0;
overflow-y: scroll;
@media screen and (max-width: 992px) {
position: fixed;
}
`
export const Logo = styled.div`
width: 100%;
height: 130px;
display: flex;
align-items: center;
padding-left: 24px;
gap: 20px;
h1{
font-family: SFProDisplay bold;
font-size: 16px;
line-height: 19px;
color: #2D3A45;
}
h2{
  font-size: 12px;
color: #2D3A45;
opacity: 0.5;
}
.logo{
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
`
export const Item = styled.div`
width: 270px;
height: 48px;
display: flex;
align-items: center;
padding-left: 24px;
gap: 20px;
border-radius: 0 6px 6px 0;
padding-left: 40px;
font-size: 15px;
box-shadow: inset 3px 0px 0px #FCB600;
color:${({ active }) => active ? '#FFFFFF' : '#000'} ;
background:${({ active }) => active && '#FCB600'} ;
transition: all .1s;
cursor: pointer;
img{
  width: 36px;
  height: 36px;
  background-color: #F6F6F6;
  padding: 10px;
  border-radius: 5px;
}
`