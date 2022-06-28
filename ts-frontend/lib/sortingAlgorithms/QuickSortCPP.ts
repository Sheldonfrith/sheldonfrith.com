import { dataTypeNamesToCPPTypeNames, JsAndCArray } from "../arrayGenerators/ArrayGenerator";
import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";

export class QuickSortCPP implements SortingAlgorithm {
    runTimeLastSort: number = NaN;
    emscriptenModule: any;
    constructor(emscriptenModule: any){
        this.emscriptenModule = emscriptenModule;
    }
    
    public sort(array: JsAndCArray): number[]{
        // ! mem leak somewhere in here
        const resAndTime = callFunctionWithTiming(()=>{
        const arrView = array.cArrays.quickSort;
        const funcName = "_quickSort"+dataTypeNamesToCPPTypeNames[array.dataType];
        // console.log(funcName)
        // console.log(Array.from(arrView.data),arrView.offset,arrView.size, this.emscriptenModule[funcName]);
        console.log('about to enter emsc module')
        this.emscriptenModule[funcName](arrView.offset,0,arrView.size-1);
        console.log('done emscr module')
        // console.log(arrView.data)
        return Array.from(arrView.data) as number[];
        });
        this.runTimeLastSort = resAndTime.time
        return resAndTime.returnVal;
    }
}