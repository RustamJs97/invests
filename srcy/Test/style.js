import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
hr{
  margin:40px 0 20px 0;
}
`
export const Wrapper = styled.div`
width: ${({ border }) => border ? '840px' : "800"};
height: ${({ border }) => border ? '840px' : "800"};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000;
background: ${({ border }) => border && 'rgba(255,255,255,.03)'};
box-shadow: ${({ border }) => border && 'inset 0 -50px  25px rgba(0,0,0,.85),inset 0 40px  20px rgba(255,255,255,.2)'};
/* box-shadow: ${({ border }) => border && '1px 1px  10px rgba(255,255,255,.2)'}; */
/* background: ${({ border }) => border && `url(https://www.reviewofreligions.org/wp-content/uploads/2021/01/shutterstock_1551061043-scaled.jpg)`}; */
background:${({ border }) => border ? `linear-gradient(
  to bottom,
    rgba(0,0,0, .72 ),
    rgba(0,0,0, .85)
    ),url(https://www.shutterstock.com/image-photo/asian-muslim-man-woman-shaking-260nw-2185760541.jpg)`: '#000'} ;
    
background-repeat: no-repeat;
background-position:  center;
background-size: cover;
/* padding: ${({ border }) => !border && '30px'}; */
border: ${({ border }) => border && '1px solid rgba(255,255,255,.3)'};
/* border-radius: ${({ border }) => border && '30px'}; */
/* box-shadow: ${({ border }) => border && 'inset 10px 10px  30px rgba(0,0,0,.99),10px 10px  10px rgba(255,255,255,.1)'}; */
.span{
text-align:center;
/* font-family: 'Noto Sans Arabic', sans-serif; */
color: #fff;
font-size: 35px;
/* padding: 30px; */
}
span{
  backdrop-filter: blur(3px);
text-shadow: 0 0 2px #000;
  font-weight:500;
text-align:center;
color: #fff;
line-height:50px;
font-size: 35px;
padding: 30px;
/* font-family: 'Montserrat', sans-serif; */
}
.sp{
text-align:center;
color: #fff;
font-size: 25px;
padding: 30px;
line-height:40px
}
`