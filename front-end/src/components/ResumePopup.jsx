
import React, {useState, useEffect, useContext, useCallback} from 'react';
import Resume from './Resume';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1rem;
    background-color: ${props=>props.theme.white};
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
const DownloadButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 1rem;
`;
const Button = styled.button`
    border: none;
    border-radius:0.3rem;
    background-color: ${props=>props.theme.orange};
    color: ${props=>props.theme.white};
    padding: 0.4rem;
    font-size: 0.8rem;
    margin: 0.3rem;
    cursor: pointer;
`;

export default function ResumePopup({downloadButtons,}) {

const openInTab =(link)=>{
    window.open(link);
}

return (
<Container>
    <Title>My CV</Title>
    <DownloadButtons>
        <Button onClick={()=>openInTab('/SheldonFrithResume.docx')}>WORD VERSION</Button>
        <Button onClick={()=>openInTab('/SheldonFrithResume.pdf')}>PDF VERSION</Button>
        <Button onClick={()=>openInTab('/SheldonFrithResume.html')}>HTML VERSION</Button>
    </DownloadButtons>
    <Resume/>
</Container>
);
}