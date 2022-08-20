import {
  JsAndCArray,
  JsDataTypeArray,
} from "../arrayGenerators/ArrayGenerator";
import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";

export class QuickSortJS implements SortingAlgorithm {
  public runTimeLastSort: number = NaN;

  private partition(arr: JsDataTypeArray, low: number, high: number) {
    const pivot = arr[high];
    let indexOfSmallerElement = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        indexOfSmallerElement++;
        //swap
        const temp = arr[j];
        arr[j] = arr[indexOfSmallerElement];
        arr[indexOfSmallerElement] = temp;
      }
    }
    //swap
    const t = arr[high];
    arr[high] = arr[indexOfSmallerElement + 1];
    arr[indexOfSmallerElement + 1] = t;
    return indexOfSmallerElement + 1;
  }

  private quickSort(arr: JsDataTypeArray, low: number, high: number) {
    if (low < high) {
      // arr[p] is in position
      const partitioningIndex = this.partition(arr, low, high);
      this.quickSort(arr, low, partitioningIndex - 1);
      this.quickSort(arr, partitioningIndex + 1, high);
    }
  }
  public sort(array: JsAndCArray): number[] {
    const resAndTiming = callFunctionWithTiming(() => {
      this.quickSort(array.jsArray, 0, array.jsArray.length - 1);
      return Array.from(array.jsArray);
    });
    this.runTimeLastSort = resAndTiming.time;
    return resAndTiming.returnVal;
  }
}
