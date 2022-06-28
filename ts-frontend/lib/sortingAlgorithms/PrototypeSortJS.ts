import { JsAndCArray } from "../arrayGenerators/ArrayGenerator";
import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";

export class PrototypeSortJS implements SortingAlgorithm {
    runTimeLastSort: number = NaN;
    public sort(array: JsAndCArray): number[]{
        const resAndTime = callFunctionWithTiming(()=>{
        return Array.from(array.jsArray.sort((a,b)=> a-b));
        })
        this.runTimeLastSort = resAndTime.time
        return resAndTime.returnVal
    }
}