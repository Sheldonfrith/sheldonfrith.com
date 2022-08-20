

#include <algorithm>
#include <iostream>
#include <vector>
extern "C" {
// "Counting Sort" standard algorithm, can handle negative numbers
#define DECLARE_COUNT_SORT_FUNCTION(numType)                                                                 \
    void countSort##numType(numType arr[], int const length)                                                 \
    {                                                                                                        \
        numType max = *std::max_element(arr, arr + length);                                                  \
        numType min = *std::min_element(arr, arr + length);                                                  \
        numType range = max - min + 1;                                                                       \
        int count[range];                                                                                    \
        numType output[length];                                                                              \
        for (int i = 0; i < length; i++)                                                                     \
            count[arr[i] - min]++;                                                                           \
        for (int i = 1; i < range; i++)                                                                      \
            count[i] += count[i - 1];                                                                        \
        for (int i = length - 1; i >= 0; i--) {                                                              \
            output[count[arr[i] - min] - 1] = arr[i];                                                        \
            count[arr[i] - min]--;                                                                           \
        }                                                                                                    \
        for (int i = 0; i < length; i++)                                                                     \
            arr[i] = output[i];                                                                              \
    }

DECLARE_COUNT_SORT_FUNCTION(int8_t)
DECLARE_COUNT_SORT_FUNCTION(int16_t)
DECLARE_COUNT_SORT_FUNCTION(int32_t)
}