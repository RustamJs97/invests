import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
.img-user{
    width: 500px; 
    height: 400px; 
}
@media only screen and (max-width: 1320px) {
    .img-user{
    width: 320px; 
    height: 250px; 
}
}
@media only screen and (max-width: 768px) {
.img-user{ width: 100%;height: 250px;}}
`
export const Wrapper = styled.div`
    background: #080808;
    border: 1px solid #222;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
@media only screen and (max-width: 960px) {
    flex-direction: column;
}
@media only screen and (max-width: 768px) {
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* box-shadow: inset 3px 3px 10px rgba(255,0,0,.09),
    inset -3px -3px 10px rgba(0,255,255,.09); */
    padding: 10px;
}
`

export const Card = styled.div`
    width: 100%;
    max-width: 800px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    padding: 60px;
    transition: all .3s;
@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
}

`
export const Title = styled.div`
    color:  #DCCA87;
    font-weight: 900;
    font-size: 35px;
    font-weight: 800;
    text-align: end;
@media only screen and (max-width: 768px) {font-size: 22px;}

`
export const Text = styled.div`
    font-weight: 900;
    text-align: center;
    font-size: ${({ desc }) => desc ? '20px' : '24px'};
    margin-top: ${({ desc }) => desc ? '14px' : '20px'};
    color: ${({ desc }) => desc ? 'grey' : '#fff'};
    line-height: ${({ desc }) => desc ? '30px' : '35px'};
@media only screen and (max-width: 768px) {font-size: ${({ desc }) => desc ? '16px' : '18px'};}

`
