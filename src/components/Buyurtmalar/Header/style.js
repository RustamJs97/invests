import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 10px 0;
max-width: 1330px;
@media only screen and (max-width: 1200px) {
max-width: 720px;
}
`