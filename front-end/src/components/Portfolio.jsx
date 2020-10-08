import React, {useState, useEffect, useContext} from 'react';
import PortfolioItems from '../lib/PortfolioItems';
import PortfolioItem from './PortfolioItem';
import HorizontalGallery from './reusable/HorizontalGallery';
import styled from 'styled-components'

export default function Portfolio(props) {
const [portfolioItems, setPortfolioItems] = useState(PortfolioItems());
const PortfolioContainer = styled.div`
    max-width: 100%;
`
return (
<PortfolioContainer>
    <HorizontalGallery>
    {Object.keys(portfolioItems).map((key, index) => {
        const item = portfolioItems[key];
        return (
        <PortfolioItem 
        key={'portfolioItem'+index}
        {...item}
        />
        );
    })}
    </HorizontalGallery>
</PortfolioContainer>
);
}
