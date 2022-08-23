import { objectKeys } from "../ObjectKeys";

export const dataTypeNamesToReadableNames = {
  int16: "Int16",
  int32: "Int32",
  float32: "Float32",
  float64: "Float64",
} as const;
export const dataTypeNamesToCPPTypeNames = {
  int16: "int16_t",
  int32: "int32_t",
  float32: "float",
  float64: "double",
} as const;
export type CPPNumTypeName =
  typeof dataTypeNamesToCPPTypeNames[keyof typeof dataTypeNamesToCPPTypeNames];
export type JsDataTypeArray =
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array;
const dataTypeNamesToJsArrayTypeConstructors = {
  int16: Int16Array,
  int32: Int32Array,
  float32: Float32Array,
  float64: Float64Array,
} as const;
type JsDataTypeArrayConstructor =
  typeof dataTypeNamesToJsArrayTypeConstructors[keyof typeof dataTypeNamesToJsArrayTypeConstructors];
const emscriptenModuleBufferNames = [
  "HEAP16",
  "HEAPU16",
  "HEAP32",
  "HEAPU32",
  "HEAPF32",
  "HEAPF64",
] as const;
type EmscriptenModuleBufferName = typeof emscriptenModuleBufferNames[any];
const dataTypeNamesToEmscriptenModuleBuffer: Record<
  DataTypeName,
  EmscriptenModuleBufferName
> = {
  int16: "HEAP16",
  int32: "HEAP32",
  float32: "HEAPF32",
  float64: "HEAPF64",
};

export type DataTypeReadableName =
  typeof dataTypeNamesToReadableNames[keyof typeof dataTypeNamesToReadableNames];
export type DataTypeName = keyof typeof dataTypeNamesToReadableNames;

interface NumberDataTypeSpec {
  jsArrayConstructor: JsDataTypeArrayConstructor;
  emscriptenBufferKey: EmscriptenModuleBufferName;
}

export const NumberDataTypes: Record<DataTypeName, NumberDataTypeSpec> = {
  int16: {
    jsArrayConstructor: Int16Array,
    emscriptenBufferKey: "HEAP16",
  },
  int32: {
    jsArrayConstructor: Int32Array,
    emscriptenBufferKey: "HEAP32",
  },
  float32: {
    jsArrayConstructor: Float32Array,
    emscriptenBufferKey: "HEAPF32",
  },
  float64: {
    jsArrayConstructor: Float64Array,
    emscriptenBufferKey: "HEAPF64",
  },
};

interface CArrayDef {
  data: any;
  offset: any;
  size: number;
}
export interface JsAndCArray {
  dataType: DataTypeName;
  upperBound: number;
  lowerBound: number;
  jsArray: JsDataTypeArray;
  cArrays: CArrays;
}
type CArrayDefNames = "countSort" | "quickSort";
type CArrays = Record<CArrayDefNames, CArrayDef>;

export class ArrayGenerator {
  private countSortBufferForFreeing: any;
  private quickSortBufferForFreeing: any;
  protected allEmscriptenModules: Record<CArrayDefNames, any>;
  constructor(allEmscriptenModules: Record<CArrayDefNames, any>) {
    this.allEmscriptenModules = allEmscriptenModules;
  }
  public newArrayWithRandomValues(
    arrayLength: number,
    dataType: DataTypeName,
    valueLowerBound: number, // inclusive
    valueUpperBound: number //inclusive
  ): JsAndCArray {
    const jsArray = new NumberDataTypes[dataType].jsArrayConstructor(
      arrayLength
    ).map((v) =>
      this.randomValueFromInterval(dataType, valueLowerBound, valueUpperBound)
    );
    //create array for CPP to use
    return {
      dataType: dataType,
      jsArray: jsArray,
      upperBound: valueUpperBound,
      lowerBound: valueLowerBound,
      cArrays: {
        ...this.setUpCArrays(
          arrayLength,
          this.allEmscriptenModules,
          jsArray,
          dataType
        ),
      },
    };
  }

  private randomValueFromInterval(
    dataType: DataTypeName,
    min: number,
    max: number
  ) {
    // min and max included
    if (dataType === "int16" || dataType == "int32") {
      //generate int
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      //genearte float
      return Math.random() * (max - min + 1) + min;
    }
  }
  private setUpCArrays(
    arrayLength: number,
    modules: CArrays,
    values: JsDataTypeArray,
    dataType: DataTypeName
  ): Record<"quickSort" | "countSort", CArrayDef> {
    const result: Record<string, CArrayDef> = {};
    objectKeys(modules).forEach((moduleName) => {
      result[moduleName] = this.setUpCArray(
        arrayLength,
        modules[moduleName],
        values,
        dataType,
        moduleName
      );
    });
    return result;
  }

  public freeMemoryAfterUse() {
    this.allEmscriptenModules.countSort._free(this.countSortBufferForFreeing);
    this.allEmscriptenModules.quickSort._free(this.quickSortBufferForFreeing);
  }
  private setUpCArray(
    arrayLength: number,
    module: any,
    values: JsDataTypeArray,
    dataType: DataTypeName,
    moduleName: CArrayDefNames
  ): CArrayDef {
    if (values.length !== arrayLength) {
      throw new Error(
        "Provided array of different length than specified array size"
      );
    }
    const arrElementSpace = values.BYTES_PER_ELEMENT;
    //console.log(arrayLength * arrElementSpace);

    var memOffset = module._malloc(arrayLength * arrElementSpace);
    //console.log("after malloc");
    const bufferName: EmscriptenModuleBufferName =
      NumberDataTypes[dataType].emscriptenBufferKey;
    const emscriptenBuffer = module[bufferName];
    const buffer = memOffset / arrElementSpace;
    emscriptenBuffer.set(values, buffer);
    //console.log("after setting one buffer, ", moduleName);
    if (moduleName === "countSort") {
      this.countSortBufferForFreeing = buffer;
    } else {
      this.quickSortBufferForFreeing = buffer;
    }
    return {
      data: emscriptenBuffer.subarray(
        memOffset / arrElementSpace,
        memOffset / arrElementSpace + arrayLength
      ),
      offset: memOffset,
      size: arrayLength,
    };
  }
}
