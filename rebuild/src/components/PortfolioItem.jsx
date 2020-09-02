import React, {useState, useEffect, useContext} from 'react';
import {getHomeURL} from '../lib/Utils';

export default function PortfolioItem({
    title, status, summary, image, link, github
}) {

const gitHubLink = () => {
    if (github){
        return <a href={github}><button>View on Github</button></a>;
    }
    return;
}
const imageGetter = () => {
    if (image) {
        return image;
    }
    return '/images/coming-soon.jpg';
}
return (
<a href={link}><div className="portfolioItem" style={{backgroundImage:`url(${imageGetter()})`}}>
    <h3>{title}</h3>
        <h4>Status: {status}</h4>
        <p>{summary}</p> 
    <nav>
    {gitHubLink()}
    </nav>
</div></a>
);
}
