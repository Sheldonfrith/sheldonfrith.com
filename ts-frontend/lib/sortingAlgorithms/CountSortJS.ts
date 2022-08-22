import {
  JsAndCArray,
  JsDataTypeArray,
} from "../arrayGenerators/ArrayGenerator";
import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";

export class CountSortJS implements SortingAlgorithm {
  runTimeLastSort: number = NaN;
  private arrayMin(arr: JsDataTypeArray) {
    var len = arr.length,
      min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }

  private arrayMax(arr: JsDataTypeArray) {
    var len = arr.length,
      max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  public sort(array: JsAndCArray): number[] {
    if (array.dataType === "float32" || array.dataType === "float64") {
      throw new Error("Cannot use Count Sort with float arrays");
    }
    const jsa = array.jsArray;
    const resAndTime = callFunctionWithTiming(() => {
      const length = jsa.length;
      const max = this.arrayMax(jsa);
      const min = this.arrayMin(jsa);
      const range = max - min + 1;
      const count: number[] = new Array(range);
      for (let i = 0; i < range; ++i) count[i] = 0;
      const output: number[] = new Array(length);
      for (let i = 0; i < length; ++i) output[i] = 0;
      for (let i = 0; i < length; i++) {
        count[jsa[i] - min]++;
      }
      for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
      }
      for (let i = length - 1; i >= 0; i--) {
        output[count[jsa[i] - min] - 1] = jsa[i];
        count[jsa[i] - min]--;
      }
      for (let i = 0; i < length; i++) {
        jsa[i] = output[i];
      }
      return Array.from(jsa);
    });
    this.runTimeLastSort = resAndTime.time;
    return resAndTime.returnVal;
  }
}
