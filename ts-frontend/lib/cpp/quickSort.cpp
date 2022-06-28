/* C++ implementation of QuickSort */
// taken from https://www.geeksforgeeks.org/quick-sort/
// #include <bits/stdc++.h>
#include <cstdint>
extern "C"
{
#define DECLARE_SWAP_FUNCTION(numType)         \
    void swap##numType(numType *a, numType *b) \
    {                                          \
        numType t = *a;                        \
        *a = *b;                               \
        *b = t;                                \
    }
    // A utility function to swap two elements
    // void swapInt8(int8_t *a, int8_t *b)
    // {
    //     int8_t t = *a;
    //     *a = *b;
    //     *b = t;
    // }

#define DECLARE_PARTITION_FUNCTION(numType)                      \
    int partition##numType(numType arr[], int low, int high) \
    {                                                            \
        numType pivot = arr[high];                               \
        int i = (low - 1);                                       \
        for (int j = low; j <= high - 1; j++)                    \
        {                                                        \
            if (arr[j] < pivot)                                  \
            {                                                    \
                i++;                                             \
                swap##numType(&arr[i], &arr[j]);                 \
            }                                                    \
        }                                                        \
        swap##numType(&arr[i + 1], &arr[high]);                  \
        return (i + 1);                                          \
    }

    /* This function takes last element as pivot, places
    the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
    to left of pivot and all greater elements to right
    of pivot */
    // float partitionInt8(float arr[], int low, int high)
    // {
    //     float pivot = arr[high]; // pivot
    //     int i = (low - 1);     // Index of smaller element and indicates the right position of pivot found so far

    //     for (int j = low; j <= high - 1; j++)
    //     {
    //         // If current element is smaller than the pivot
    //         if (arr[j] < pivot)
    //         {
    //             i++; // increment index of smaller element
    //             swapfloat(&arr[i], &arr[j]);
    //         }
    //     }
    //     swapfloat(&arr[i + 1], &arr[high]);
    //     return (i + 1);
    // }

#define DECLARE_QUICK_SORT_FUNCTION(numType)                  \
    void quickSort##numType(numType arr[], int low, int high) \
    {                                                         \
        if (low < high)                                       \
        {                                                     \
            int pi = partition##numType(arr, low, high);  \
            quickSort##numType(arr, low, pi - 1);             \
            quickSort##numType(arr, pi + 1, high);            \
        }                                                     \
    }

    /* The main function that implements QuickSort
    arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index */
    // void quickSortInt8(int8_t arr[], int8_t low, int8_t high)
    // {
    //     if (low < high)
    //     {
    //         /* pi is partitioning index, arr[p] is now
    //         at right place */
    //         int8_t pi = partitionInt8(arr, low, high);
    //         // Separately sort elements before
    //         // partition and after partition
    //         quickSortInt8(arr, low, pi - 1);
    //         quickSortInt8(arr, pi + 1, high);
    //     }
    // }
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
    // This code is contributed by rathbhupendra
}