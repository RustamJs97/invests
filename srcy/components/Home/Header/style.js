import styled from 'styled-components'
import logos from '../../../assets/img/newlogo.png'

export const Container = styled.div`
background-color: rgba(1,1,1,.6);
/* background: rgb(32,227,255); */
background:  linear-gradient(166deg, rgba(250,250,250,0.08) 34%, rgba(0,0,0,1) 68%);
/* background-image:linear-gradient( to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%),    url(https://t3.ftcdn.net/jpg/03/79/29/16/360_F_379291633_QyxoAmoPf5BWU8K1tUw7Cms6jQQdQuUh.jpg); */
background-repeat: no-repeat;
background-position: center ;
background-size: cover;
@media only screen and (max-width: 768px) {
  .flex-btn{
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  background: rgb(0,0,0);
background: linear-gradient(165deg, rgba(0,0,0,1) 57%, rgba(250,250,250,0.1) 71%, rgba(0,0,0,1) 88%);
/* background: #000; */
}
`
export const Wrapper = styled.div`
width: 100%;
backdrop-filter: blur(5px);
max-height: 700px;
padding-top: 60px;
@media only screen and (max-width: 768px) {
  padding: 30px 20px;
  height: 100%;
  max-height: 800px;
  flex-direction: column-reverse;
}
`
Wrapper.Logo = styled.div`
border-radius: 50%;
background-image: url(${logos});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
min-width: 500px;
max-width: 500px;
height: 500px;
@media only screen and (max-width: 1320px) {
min-width: 300px;
max-width: 300px;
height: 300px;
}
@media only screen and (max-width: 960px) {
display: none;
}
@media only screen and (max-width: 768px) {
display:flex;
min-width: 330px;
max-width: 330px;
height: 300px;
background-repeat: no-repeat;
background-position: center;
background-size: contain;
}
`
export const Title = styled.span`
`

Title.Text = styled.h5`
font-size: 70px;
text-shadow: 0 0 5px black;
margin-bottom: 30px;
font-weight: 700;
color: #DCCA57;
text-shadow: 0 0 2px rgba(82,113,255,7);
@media only screen and (max-width: 768px) {
  font-size: 35px;
  text-align: center;
  margin-bottom: 15px;
}
`
Title.Desc = styled.h5`
font-size: 40px;
color:#fff;
text-shadow: 0 0 2px #000;
margin-bottom: 15px;
font-weight: 700;
@media only screen and (max-width: 768px) {
  font-size: 24px;
  text-align: center;
  }
`
Title.P = styled.h5`
font-size: 24px;
color: rgba(168,168,168,1);
text-shadow: 0 0 2px #000;
margin-bottom: 60px;
@media only screen and (max-width: 768px) {
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  }
`
export const Button = styled.button`
width: 200px;
height: 60px;
color: #fff;
font-size: 24px;
font-weight: 999;
border-radius: 5px;
cursor: pointer;
margin-left: ${({ right }) => !right && '20px'};
margin-top: ${({ mt }) => mt};
background: ${({ right }) => !right ? 'transparent' : '#0a0a0a'};
border: ${({ right }) => !right ? '2px solid #111' : '#111'};
color: ${({ right }) => !right ? '#fff' : '#fff'};
transition: all .1s;
:hover{opacity:.7}
@media only screen and (max-width: 768px) {
  width: 150px; 
  height: 40px;
  font-size: 16px;
  margin: 0;
  border: ${({ right }) => !right ? '2px solid rgba(255,255,255,.2)' : '2px solid rgba(255,255,255,.06)'};
  background: ${({ right }) => !right ? 'transparent' : '#0e0e0f'};
}

`
