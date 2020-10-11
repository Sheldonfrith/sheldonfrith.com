import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';
import {getTechStackIconAndLink} from '../lib/TechStackIcons';
import IconButton from './reusable/IconButton';

const Container = styled.div`
    margin: 1rem;
    background-color: ${props=>props.theme.white};
    /* height: 80vh; */
    padding: 0 0 2rem 0;
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
const TechStackIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 85%;
    padding: 0 1rem 1rem 1rem;
`;



export default function PortfolioItemPopup({title, description, techStackList, githubLink, directLink}) {

const openInTab =(link)=>{
    window.open(link);
}

return (
<Container>
    <Title>{title}</Title>
    {techStackList?<TechStackIcons>
        <div>Built <br></br>with:</div>
        {techStackList.map((tooltip,index) => {
        const arr = getTechStackIconAndLink(tooltip);
        // console.log(tooltip,arr);
        if (!arr) return <></>;
        return <IconButton key={'techstack',index} tooltip={tooltip} icon={tooltip} iconSize={40} isNotMaterialUI={true} margin={0} onClick={()=>openInTab(arr[1])}/>;
    })}
    </TechStackIcons>:<></>}
    <Description>
        {description}
    </Description>
    {githubLink?<Button onClick={()=>openInTab(githubLink)}>View the Code on GitHub</Button>:<></>}
    {directLink?<Button onClick={()=>openInTab(directLink)}>See It In Action</Button>:<></>}
</Container>
);
}
