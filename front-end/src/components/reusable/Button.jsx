//Button.react.js
import React, {useState, useEffect, useContext, useCallback} from 'react';

export default function Button({label, onClick, className,children}) {
const [isHovered, setIsHovered] = useState(false);

const onMouseEnter= ()=>{
    setIsHovered(true);
}
const onMouseLeave = ()=>{
    setIsHovered(false);
}
return (
<button 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
className={'btn '+className+isHovered/**!Delete me*/} 
    onClick={()=> {/**DELETE ME*/ className = 'wasClicked'; onClick();}}>
{label || children}
</button>
);
}
