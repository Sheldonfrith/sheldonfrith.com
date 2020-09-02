import React, { useState, useEffect, useContext } from 'react';
import AccordionSection from './AccordianSection'

export default function Accordian({children}) {
    const initialOpenSections = {
        "Work History": true,
    }
    const [openSections, setOpenSections] = useState(initialOpenSections);
    const onClick = label => {

        const isOpen = !!openSections[label];
        setOpenSections({[label]: !isOpen});
    };

    return (

        <div>
        
            {
                children.map((child,index)=> (
                    <AccordionSection
                        key={`accordianSection ${index}`}
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        onClick={onClick}
                    >
                        {child}
                    </AccordionSection>
                ))
            }
        </div >

    );
}
