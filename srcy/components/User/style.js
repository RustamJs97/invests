import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px 20%;
h1{
  color: grey;
  font-size: 25px;
  margin: 40px 0;
}
.imgs{
width: 50%;
max-width:800px;
margin-top: 100px;
}
@media only screen and (max-width: 960px) {
padding: 50px 0 ;
.imgs{width: 80%;}
h1{ font-size: 17px;font-weight:800}
}
`
Container.Img = styled.img`

`
