import React from 'react';
import useMyState from '../../lib/Hooks/useMyState'

export default function CheckboxMultiSelect({optionsList, setStateList}) {
    const [checkedList, setCheckedList] = useMyState(optionsList.map(item=>false),'array');
    // console.log(checkedList);
    if (!optionsList || !Array.isArray(optionsList) || optionsList.length<1){
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
    // console.log(optionsList);
return (
<div className="form-check">
          {optionsList.map((arr,index)=>{
            return (
            <div key={'chckboxms'+index} className="checkbox form-control"><label>
              <input 
              defaultChecked={checkedList[index]}
              onChange={(e)=>{
                console.log('checkbox select change',checkedList);
                const checked = e.target.checked;
                const val = e.target.value;
                setCheckedList(prev => {
                    let temp = [...(prev||[])];
                    temp.splice(index,1,!prev[index]);
                    console.log('checkbox select new checked list',[...temp]);
                    return [...temp];
                });
                setStateList(prev1 =>{
                  // console.log('setting provided state list');
                  let prev = [...(prev1||[])];
                  if (!prev) prev = [];
                  if (!checked) {
                    
                      prev.splice(prev.findIndex(element=>element===val),1);
                      return [...prev];
                  }
                  prev.push(val);
                  return [...prev];
                })
              }}
              type="checkbox" 
              defaultValue={arr[0]}
              />{arr[1]}</label></div>
            );
          })}
        </div>
);
}
