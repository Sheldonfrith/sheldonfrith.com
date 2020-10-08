import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Select({onChange, optionsList}) {
    if (!optionsList || !Array.isArray(optionsList) || optionsList.length<1){
        console.log('invalid optionsList: ',optionsList);
        return <div>No options list detected for this component...</div>;
    }
    //remove null values from optionsList
    optionsList = optionsList.filter(item => item!==null);
    //same as select, options list can be nested list with [0] as 'value' and [1] as text label
    // or if its not nested then both will be the same
    if (!Array.isArray(optionsList[0])){
        //make sure all items are not arrays, otherwise it messes things up
        let isValid = true;
        optionsList.forEach(item =>{ if (Array.isArray(item)){
            isValid = false;
            throw new Error('optionsList passed to CheckboxmultiSelect is invalid'+JSON.stringify(optionsList));
        }});

        optionsList = isValid?optionsList.map(item=> item?[item,item]:null):[['0','issue with optionsList, error']];
    }
    //if the first item is an array, make sure the rest of the items are arrays also
    if (Array.isArray(optionsList[0])){
        //make sure all items are not arrays, otherwise it messes things up
        let isValid = true;
        optionsList.forEach(item =>{ if (!Array.isArray(item)){
            isValid = false;
            throw new Error('optionsList passed to CheckboxmultiSelect is invalid'+JSON.stringify(optionsList));
        }});
    }
    // console.log('successfully set props for Select: ',optionsList);
return (
<select className="form-control" onChange={onChange}>
    {optionsList.map((item,index)=>{
        return <option key={'select'+index} value={item[0]} >{item[1]}</option>
    })}
</select>
);
}
