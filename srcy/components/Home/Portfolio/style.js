import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
width: 100%;
`
export const Carousels = styled(Carousel)`
width: 1312px;
height: 150px;
.rec-pagination{display:none}
.rec-arrow-left, .rec-arrow-right{background:transparent; border:1px solid #5555; color:#fff}
.rec-arrow-left:hover, .rec-arrow-right:hover{background:#5555; }
@media only screen and (max-width: 768px) { padding:0}

`

export const Title = styled.h1`
color: grey;
font-weight: 900;
font-size: 24px;
@media only screen and (max-width: 768px) {font-size: 20px;}
`
export const Button = styled.a`
width: 30px;
backdrop-filter: blur(4px);
height: 300px;
color: #fff;
display: flex;
text-shadow: 0 0 20px #000;
font-weight: 900;
align-items: center;
justify-content: center;
cursor: pointer;
background: #3333;
font-size: 30px;
border-radius: 10px;
text-orientation: upright;
writing-mode: vertical-lr;
`