import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 80px;
top: 0px;
position: sticky;
background: #FFFFFF;
border-left: 2px solid #E5E5E5;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
z-index: 3;
img{cursor: pointer;}

`
export const Wrapper = styled.span`
width: 100%;
height: 80px;
top: 0px;
position: sticky;
background: #fff;
display: flex;
align-items: center;
`
export const Item = styled.span`
width: ${({ width }) => width};
height: 80px;
border-right: ${({ border }) => border};
background: #fff;
display: flex;
font-size: 12px;
align-items: center;
padding-left: 36px;
gap: 14px;
`
export const InputItem = styled.span`
width: 300px;
height: 48px;
display: flex;
align-items: center;
border-radius: 24px;
background: #EDEFF3;
gap: 14px;
padding: 0 20px;
input{
width: 100%;
border: none;
outline: none;
background-color: transparent;
font-size: 13px;
color: #111;
opacity: 0.4;
}
img{
  width: 20px;
  height:20px;
}
`
