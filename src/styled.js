import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100vh;
color:white;
font-family: Arial;
background:linear-gradient(180deg,  black, blue);
`
export const Title =styled.h1`
text-align:center;
padding:5%;
font-size:2.5rem;
`
export const H3 =styled.h3`
font-size:1.5rem;
margin-bottom:5%;
`
export const Ul =styled.ul`
list-style:none;
font-size:1.5rem;
li{
 font-weight: bolder;  
 color:lightblue; 
}
`
export const Div =styled.div`
display:flex;
width:70%;
justify-content: space-between;
align-items: center;
margin:5% auto;
`
export const Form = styled.div`
width:40%;
input{
    border:none;
    height:30px;
}
button{
    border:none;
    height:30px;
    width:40%;
    background-color:lightskyblue;  
}
`