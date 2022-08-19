export const CPPQuickSortCode = `
//Standard Quick Sort algorithm
#include <cstdint>
extern "C"
{
#define DECLARE_SWAP_FUNCTION(numType)         \\
    void swap##numType(numType *a, numType *b) \\
    {                                          \\
        numType temp = *a;                        \\
        *a = *b;                               \\
        *b = temp;                                \\
    }
    

#define DECLARE_PARTITION_FUNCTION(numType)                      \\
    int partition##numType(numType arr[], int low, int high) \\
    {                                                            \\
        numType pivot = arr[high];                               \\
        int i = (low - 1);                                       \\
        for (int j = low; j <= high - 1; j++)                    \\
        {                                                        \\
            if (arr[j] < pivot)                                  \\
            {                                                    \\
                i++;                                             \\
                swap##numType(&arr[i], &arr[j]);                 \\
            }                                                    \\
        }                                                        \\
        swap##numType(&arr[i + 1], &arr[high]);                  \\
        return (i + 1);                                          \\
    }


#define DECLARE_QUICK_SORT_FUNCTION(numType)                  \\
    void quickSort##numType(numType arr[], int low, int high) \\
    {                                                         \\
        if (low < high)                                       \\
        {                                                     \\
            int pi = partition##numType(arr, low, high);  \\
            quickSort##numType(arr, low, pi - 1);             \\
            quickSort##numType(arr, pi + 1, high);            \\
        }                                                     \\
    }

    DECLARE_SWAP_FUNCTION(int16_t)
    DECLARE_SWAP_FUNCTION(int32_t)
    DECLARE_SWAP_FUNCTION(float)
    DECLARE_SWAP_FUNCTION(double)
    
    DECLARE_PARTITION_FUNCTION(int16_t)
    DECLARE_PARTITION_FUNCTION(int32_t)
    DECLARE_PARTITION_FUNCTION(float)
    DECLARE_PARTITION_FUNCTION(double)

    DECLARE_QUICK_SORT_FUNCTION(int16_t)
    DECLARE_QUICK_SORT_FUNCTION(int32_t)
    DECLARE_QUICK_SORT_FUNCTION(float)
    DECLARE_QUICK_SORT_FUNCTION(double)
}
`;
export const CPPCountingSortCode = `
#include <algorithm>
#include <iostream>
#include <vector>
extern "C" {
    // "Counting Sort" standard algorithm, can handle negative numbers
    #define DECLARE_COUNT_SORT_FUNCTION(numType)\\
    void countSort##numType(numType arr[], int const length)\\
    {\\
        numType max = *std::max_element(arr, arr+length);\\
        numType min = *std::min_element(arr, arr+length);\\
        numType range = max - min + 1;\\
        int count[range];\\
        numType output[length];\\
        for (int i = 0; i < length; i++)\\
            count[arr[i] - min] ++;\\
        for (int i = 1; i < range; i++)\\
            count[i] += count[i - 1];\\
        for (int i = length - 1; i >= 0; i--) {\\
            output[count[arr[i] - min] - 1] = arr[i];\\
            count[arr[i] - min] --;\\
        }\\
        for (int i = 0; i < length; i++)\\
            arr[i] = output[i];\\
    }
    
    DECLARE_COUNT_SORT_FUNCTION(int8_t)
    DECLARE_COUNT_SORT_FUNCTION(int16_t)
    DECLARE_COUNT_SORT_FUNCTION(int32_t)


}
`;
export const JSCountingSortCode = `
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
  
`;
export const JSQuickSortCode = `

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
        /* arr[p] is now
                at right place */
        const partitioningIndex = this.partition(arr, low, high);
        // Separately sort elements before
        // partition and after partition
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
`;