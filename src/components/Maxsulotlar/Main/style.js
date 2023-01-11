import styled from "styled-components";

export const Container = styled.span`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 50px;
@media screen and (max-width: 992px) {
  padding: 0 20px 50px 20px;
}
`
export const Menu = styled.span`
width: 100%;
height: 36px;
display: flex;
align-items: center;
background: #FFFFFF;
margin: 20px 0;
box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
`
Menu.Item = styled.span`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 992px;
padding: 0 18px;
`
export const Card = styled.span`
width: 100%;
max-width: 992px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
margin-bottom: 8px;
transition: all .1s;
padding: 0 18px;
:hover{box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);z-index:2}
`
Card.Title = styled.span`
width: 100%;
height: 30px;
justify-content: ${({ action }) => action ? 'end' : 'start'};
border-left: ${({ border }) => border && '1px solid #EDEFF3'};
/* border: 1px solid red; */
line-height: 0;
margin-top: 5px;
font-size: 11px;
color: #2D3A45;
display: flex;
align-items: center;
gap: 10px;
padding: 10px;
`
export const Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`
export const Button = styled.button`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background: #EDEFF3;
border-radius: 50%;
border: none;
cursor: pointer;
:hover{background:#dadce0}
`


