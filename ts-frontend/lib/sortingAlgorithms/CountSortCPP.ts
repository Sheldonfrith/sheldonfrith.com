import { dataTypeNamesToCPPTypeNames, JsAndCArray } from "../arrayGenerators/ArrayGenerator";
import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";

export class CountSortCPP implements SortingAlgorithm {
    runTimeLastSort: number = NaN;
    emscriptenModule: any;
    constructor(emscriptenModule: any){
        this.emscriptenModule = emscriptenModule;
    }
    public sort(array: JsAndCArray): number[]{

        if (array.dataType === 'float32' || array.dataType === 'float64'){
            throw new Error("Cannot use Count Sort with float arrays")
        }
        const arrView = array.cArrays.countSort;
        const resAndTime = callFunctionWithTiming(()=>{
        // console.log(Array.from(arrView.data), this.emscriptenModule, arrView.offset, arrView.size);
        const funcName = "_countSort"+dataTypeNamesToCPPTypeNames[array.dataType];
        // console.log(funcName)
        const funcToCall = this.emscriptenModule[funcName];
        // console.log(funcToCall)
        funcToCall(arrView.offset,arrView.size);
        // console.log(Array.from(arrView.data));
        return Array.from(arrView.data) as number[];
        })
        this.runTimeLastSort = resAndTime.time
        return resAndTime.returnVal
    }
}