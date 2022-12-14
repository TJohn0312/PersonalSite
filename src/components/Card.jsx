import React from 'react'
import styled from "styled-components";

const Container = styled.div`
background-color: #323232;
overflow: hidden;
height:300px;
width:600px;
border-radius: 25px;
display: flex;
position: relative;
margin: ${(props) => props.align === "right" ? "0 0 0 auto" : "40px auto 40px 0"};

cursor: pointer;
transition: all .8s;
:hover{transform:scale(1.05)}
`

const ESpan = styled.span`
/*make the div a clickable link*/
position:absolute; 
width:100%;
height:100%;
top:0;
left: 0;
z-index: 1;
`

const Left = styled.div`
height: 100%;
width: 40%;
padding: 5%;
font-size: 25px;
color:white;

background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
@keyframes gradient {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
};
`

const Text = styled.p`
font-size: 30px;
`

const Right = styled.div`
height: 100%;
width: 50%;
color: white;/*for img alt*/
overflow: hidden;
text-align: center;
`

const Image = styled.img`
height: 100%;
display: block;
position: relative;
top: 0;
/*right: 40%;*/
`

const Card = ({item}) => {
  return (
    <Container align={item.align}>
      <a href={item.link}><ESpan></ESpan></a>
      <Left>
        <Text>{item.text}</Text>
      </Left>
      <Right>
        <Image src={item.img} alt={item.alt}/>
      </Right>
    </Container>
  )
}

export default Card;
