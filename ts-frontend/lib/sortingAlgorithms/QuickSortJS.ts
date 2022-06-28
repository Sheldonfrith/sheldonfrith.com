import {
    JsAndCArray,
    JsDataTypeArray,
  } from "../arrayGenerators/ArrayGenerator";
  import { callFunctionWithTiming, SortingAlgorithm } from "./SortingAlgorithm";
  
  
  export class QuickSortJS implements SortingAlgorithm {
      public runTimeLastSort: number=NaN;
  
      /* This function takes last element as pivot, places
      the pivot element at its correct position in sorted
      array, and places all smaller (smaller than pivot)
      to left of pivot and all greater elements to right
      of pivot */
  
      private partition(arr: JsDataTypeArray, low: number, high: number)
      {
          const pivot = arr[high]; // pivot
          let i = (low - 1);     // Index of smaller element and indicates the right position of pivot found so far
          for (let j = low; j <= high - 1; j++)
          {
              // If current element is smaller than the pivot
              if (arr[j] < pivot)
              {
                  i++; // increment index of smaller element
                  //swap
                  const t = arr[j];
                  arr[j] = arr[i];
                  arr[i] = t;
              }
          }
          //swap
          const t = arr[high]
          arr[high] = arr[i+1]
          arr[i+1] = t
          return (i + 1);
      }
  
      /* The main function that implements QuickSort
      arr[] --> Array to be sorted,
      low --> Starting index,
      high --> Ending index */
      private quickSort(arr: JsDataTypeArray, low: number, high: number)
      {
          if (low < high)
          {
              /* pi is partitioning index, arr[p] is now
              at right place */
              const pi = this.partition(arr, low, high);
              // Separately sort elements before
              // partition and after partition
              this.quickSort(arr, low, pi - 1);
              this.quickSort(arr, pi + 1, high);
          }
      }
    public sort(array: JsAndCArray): number[] {
        const resAndTiming = callFunctionWithTiming(()=>{
            this.quickSort(array.jsArray, 0, array.jsArray.length-1);
            return Array.from(array.jsArray);
        });
        this.runTimeLastSort = resAndTiming.time;
        return resAndTiming.returnVal;
    }
  }
  