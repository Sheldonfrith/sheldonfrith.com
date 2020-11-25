
import React, {useState, useEffect, useContext, useCallback} from 'react';
import Resume from './ResumeContent';
import styled from 'styled-components';
import {verticalFlexBox, horizontalFlexBox} from '../reusable-styles';

const Container = styled.div`
    margin: 1rem;
    background-color: ${props=>props.theme.white};
    width: 80vw;
    ${verticalFlexBox}
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
    ${horizontalFlexBox}
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
    </DownloadButtons>
    <Resume/>
</Container>
);
}