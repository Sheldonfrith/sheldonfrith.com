import React, { useState, useEffect, useContext } from 'react';
import AccordionSection from './AccordianSection'

export default function Accordian({children, initialOpenSectionNames}) {
    const getInitialOpenSections = ()=>{
        const openSectionsObject = {}
        initialOpenSectionNames.forEach(name=>{
            openSectionsObject[name] = true;
        });
        return openSectionsObject;
    }
    const [openSections, setOpenSections] = useState(getInitialOpenSections());
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
