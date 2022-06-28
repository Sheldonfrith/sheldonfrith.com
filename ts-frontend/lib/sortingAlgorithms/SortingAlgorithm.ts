import { JsAndCArray } from "../arrayGenerators/ArrayGenerator";
import { format } from "path";

export interface SortingAlgorithm {
    runTimeLastSort: number;
    sort: (array: JsAndCArray) => number[];
}

export function callFunctionWithTiming<ReturnType>(func: (...args: any)=>ReturnType, args: any = undefined): {'returnVal':ReturnType, 'time':number} {
    const startTime = performance.now()
    const result = func(args)
    const endTime = performance.now()
    return {
        returnVal: result,
        time: endTime - startTime
    }
}
