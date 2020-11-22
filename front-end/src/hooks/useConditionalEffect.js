import {useDeltaArray, useConditionalEffect} from 'react-delta';

// simple call to react-delta but with an automatic async wrapper

export default function useEffect (triggerVariables, callback){
    const delta = useDeltaArray(triggerVariables, true);
    let triggerVariablesHaveChanged = false;    
    delta.forEach(obj => {
        if (!obj) return;
        if (obj.prev !== obj.curr){
            triggerVariablesHaveChanged = true;
        }
        });
    useConditionalEffect(()=>{
        const asyncWrapper = async ()=>{
            await callback();
        }
        asyncWrapper();
    }, triggerVariablesHaveChanged);
};