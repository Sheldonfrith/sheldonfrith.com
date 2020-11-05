
import { useEffect } from "react";
import useHasChanged from './useHasChanged';
import {useDeltaArray, useConditionalEffect} from 'react-delta';
//WRITTEN BY SHELDON FRITH
// if dependency is missing throw an error?
// if dependency array is undefined set it to empty array

// automatically wrap it in an async wrapper so async is easier

export default function useMyEffect (triggerVariables, callback, dependencies = []){
    const delta = useDeltaArray(...triggerVariables, true);

    useConditionalEffect(()=>{
        const asyncWrapper = async ()=>{
            await callback();
        }
        asyncWrapper();
    }, delta.prev !== delta.curr);

    //trigger Variable is an array
    //if any item in the array changes the effect will run, otherwise it wont
        
//         const haveTriggerVariablesChanged = useHasChanged(triggerVariables);
//         const effectHook = ()=>{
//             if (!haveTriggerVariablesChanged) return;
//             const asyncWrapper = async()=>{
//                 await callback();
//             }
//             asyncWrapper();
//         }

//         useEffect(effectHook, dependencies);
}