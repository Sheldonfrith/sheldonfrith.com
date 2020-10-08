import {useState, useCallback} from 'react';
import _ from 'lodash';

//WRITTEN BY SHELDON FRITH

// this should alter the regular useState
//hook so that the setState callback function
//(ex: setAnimals(prev => return prev++))
//is easier to write, without having to worry about mutations or cloning arrays, etc.
// so the following should work:
// const [numbers, setNumbers] = useMyState([1,2,3,4]);
// setNumbers(prev=>prev.push(6));
//setNumbers(prev=>prev.splice(1,1));

//if there is no return value, return 'prev'
// immediately clone the previous value so it can be safely worked on ex: const newPrev = [...prev];
// return the cloned version, not the original so that react detects the change in state

//NOT currently working
export default function useMyState (initialState, stateType){
    //stateType can be: boolean, number, string, array, or object
    const [stateReference, defaultSetter] = useState(initialState);

    const stateSetter = useCallback((valueOrCallback) =>{
        //is it a function or a simple value
        if (!_.isFunction(valueOrCallback)){
            //its NOT a function, just do a simple state update
            defaultSetter(valueOrCallback);
            return;
        } else {
            //it IS a function, here is where things get interesting
            defaultSetter(prev =>{
                let temp;
                switch(stateType){
                    case 'boolean':
                        temp = prev?true:false;
                        break;
                    case 'string':
                        temp = JSON.parse(JSON.stringify((prev||'')));
                        break;
                    case 'number':
                        temp = JSON.parse(JSON.stringify((prev||0)));
                        break;
                    case 'array':
                        temp = [...(prev||[])];
                        break;
                    case 'object':
                        temp = {...(prev||{})};
                        break;
                    default:
                        throw new Error('invalid state type in useMyState');
                }
                let result = valueOrCallback(temp);
                if (result === undefined) result =  temp;
                return result;
            })
        }
        return;
    },[defaultSetter,stateType]);
    return [stateReference, stateSetter];
}