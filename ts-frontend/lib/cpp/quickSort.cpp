//Standard Quick Sort algorithm
#include <cstdint>
extern "C"
{
#define DECLARE_SWAP_FUNCTION(numType)         \
    void swap##numType(numType *a, numType *b) \
    {                                          \
        numType temp = *a;                        \
        *a = *b;                               \
        *b = temp;                                \
    }
    

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