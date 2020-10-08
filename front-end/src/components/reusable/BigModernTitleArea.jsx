import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';


export default function BigModernTitle({id, title,subtitle, blurb, buttons}) {

    const TitleArea = styled.div`
        background-color:black;
    `
    const Title = styled.h1`
        color:green;
    `
return (
<div >
    <TitleArea>
        {title?<Title>{title}</Title>:<></>}
    </TitleArea>
    <div >
        {subtitle?<h2>{subtitle}</h2>:<></>}
    </div>
    <div >
        {blurb?<h3>{blurb}</h3>:<></>}
    </div>
    {buttons?<div >
        {buttons}
    </div>:<></>}
</div>
);
}
