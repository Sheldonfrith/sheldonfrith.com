import React, {useState, useEffect, useContext} from 'react';
import PortfolioItems from '../lib/PortfolioItems';
import PortfolioItem from './PortfolioItem';


export default function Portfolio(props) {
const [portfolioItems, setPortfolioItems] = useState(PortfolioItems());
return (
<div className="Portfolio">
    {Object.keys(portfolioItems).map((key, index) => {
        const item = portfolioItems[key];
        return (
        <PortfolioItem 
        key={'portfolioItem'+index}
        title={item.title}
        status={item.status}
        summary={item.summary}
        image={item.image}
        link={item.link}
        github={item.github}
        />
        );
    })}
</div>
);
}
