/*
 * Copyright 2011 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#include <stdint.h>
#include <iostream>
extern "C" {
float sumNumbers(float num1, float num2) {
    return num1 + num2;
}
}
