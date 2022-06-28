/*
 * Copyright 2011 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#include <stdint.h>
#include <iostream>
extern "C"{
void processArray(double inArray[], int const length ) {
    for (int i=0; i<length; i++){
        inArray[i] ++;
    }
}
}
