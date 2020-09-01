import React, {useState, useEffect, useContext} from 'react';

export default function PortfolioItem({
    title, status, summary, image, link, github
}) {

return (
<div className="portfolioItem">
    <h3>{title}</h3>

    <a href={link}>
        <h4>{status}</h4>
        <p>{summary}</p> 
    </a>
    <a href={github}><button>View on GitHub</button></a>
</div>
);
}
