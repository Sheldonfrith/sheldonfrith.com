import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NavBar({
  optionsList,
  trackByIndex,
  currentlySelected,
  setCurrentlySelected,
}) {
    
    //optionsList can be a nested list where [0] is the value and [1] is the text to display
    //if it is not nested then value is displayed as text
    //detect optionsList type and convert it to nested list
    if (typeof optionsList[0] !== 'object'){
        optionsList = optionsList.map(item=> [item,item]);
    }
    //if trackByIndex === true then currentlySelected will refer to the items index in optionsList
    //if false then it will refer to the value given in options list, which must be searched to find the index
    const [activeIndex, setActiveIndex] = useState(0);

    const findIndexOfVal = useCallback((val)=>{
        for(let i = 0; i<optionsList.length;i++){
            if (optionsList[i][0]===val){
                return i
            }
        }
    },[optionsList]);
    //keep activeIndex the same as currentlySelected
    useEffect(()=>{
       if (trackByIndex){
           setCurrentlySelected(activeIndex);
       } else {
           setCurrentlySelected(optionsList[activeIndex][0]);
       }
    },[activeIndex, trackByIndex, optionsList, setCurrentlySelected])
    if (!optionsList || !Array.isArray(optionsList) || optionsList.length<1){
        return <div>No options list detected for this component...</div>;
    }

  return (

    <div className="navbar">
        {optionsList.map((arr,index)=>{
            return (
                <div key={'navbar'+index} className={"nav-item "+(index===activeIndex?'active':'')}>
                    <button className="btn btn-primary navbar-btn" onClick={()=>(setActiveIndex(index))}>{arr[1]}{index===activeIndex?<span className="sr-only">(current)</span>:''}</button>
                </div>
            )
        })}
    </div>
  );
}
