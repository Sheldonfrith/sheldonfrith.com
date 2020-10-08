import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1rem;
    background-color: ${props=>props.theme.white};
    height: 80vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.h3`
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
    margin: 0;
`;
const Description = styled.div`
    width: 80%;
    margin: auto;
    font-size: 1rem;
    text-overflow: ellipsis;
`;
const Button = styled.button`
    border: none;
    border-radius:0.4rem;
    background-color: ${props=>props.theme.orange};
    color: ${props=>props.theme.white};
    padding: 0.8rem;
    font-size: 1.5rem;
    margin: 0.8rem;
    cursor: pointer;
`;


export default function PortfolioItemPopup({title, description, githubLink, directLink}) {

const openInTab =(link)=>{
    window.open(link);
}

return (
<Container>
    <Title>{title}</Title>
    <Description>
        {description}
    </Description>
    {githubLink?<Button onClick={()=>openInTab(githubLink)}>View the Code on GitHub</Button>:<></>}
    {directLink?<Button onClick={()=>openInTab(directLink)}>See It In Action</Button>:<></>}
</Container>
);
}
