import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
display: flex;
.img-mentor{
    width: 100px; 
    height: 100px; 
}
@media only screen and (max-width: 768px) {
.img-mentor{ width: 70px;  height: 70px;}
}
`
export const Card = styled.div`
width: 620px;
max-height: 250px;
border-radius: 15px;
background: linear-gradient(149deg, rgba(0,0,0,0.98) 63%, rgba(13,13,13,0.78) 99%, rgba(0,0,0,0.91) 100%);
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%;
border: 1px solid rgba(255,255,255,.09);
display: flex;
flex-direction: column;
padding: 20px;
margin: 30px 0;
transition: all .3s;
:hover{box-shadow: 0 2px 14px rgba(255,255,255,.12);border: 1px solid rgb(255,255,255,.3);}
@media only screen and (max-width: 1320px) {
width: 450px;
margin: 15px 0;
}
@media only screen and (max-width: 960px) {
width: 100%;
border-radius: 5px;
margin: 10px 0;
border: 1px solid rgba(255,255,255,.3);
}
`
export const Title = styled.h6`
color: #fff;
font-weight: 900;
font-size: 24px;
text-align: end;
@media only screen and (max-width: 768px) {
font-size: 20px;
}
`
export const Text = styled.h6`
font-weight: 900;
font-size: ${({ desc }) => desc ? '16px' : '27px'};
margin-top: ${({ desc }) => desc ? '14px' : '20px'};
color: ${({ desc }) => desc ? 'grey' : '#DCCA87'};
@media only screen and (max-width: 768px) {
font-size: ${({ desc }) => desc ? '12px' : '20px'};
margin-top: ${({ desc }) => desc ? '0' : '0'};
}
`
