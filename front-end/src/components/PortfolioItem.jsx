import React, {useState, useEffect, useContext} from 'react';
import {getHomeURL} from '../lib/Utils';

let prevHoverState = null;

export default function PortfolioItem({
    title, status, summary, image, showImage, link, github
}) {

image = image?image:'/images/coming-soon.jpg';
//set status text color
let statusColor = 'green';
if (status.includes('Coming')){
    statusColor='red';}


const [isHovered, setIsHovered] = useState(false);
const [background, setBackground] = useState({backgroundColor:'white'});
const [opacity, setOpacity] = useState('1');

//Visual changes whenever this component is hovered
useEffect (()=>{
    if (!showImage) return;
    if (isHovered===prevHoverState) return;
    if (isHovered) {
        prevHoverState=true;
        setBackground({backgroundImage:`url(${image})`});
        setOpacity('0');
    }
    if (!isHovered) {
        prevHoverState=false;
        setBackground({backgroundColor:'white'});
        setOpacity('1');
    }
    return;
},[isHovered, image, status])

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
<a onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} href={link}><div className="portfolioItem" style={background}>
    <div style={{opacity:opacity}}>
    <h3>{title}</h3>
        <h4 style={{color:statusColor}}>Status: {status}</h4>
        <p>{summary}</p> 
    
    </div>
    <nav>
    {gitHubLink()}
    </nav>
</div></a>
);
}
