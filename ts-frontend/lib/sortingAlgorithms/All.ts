import { JsAndCArray } from "../arrayGenerators/ArrayGenerator";
import { CountSortCPP } from "./CountSortCPP";
import { CountSortJS } from "./CountSortJS";
import { PrototypeSortJS } from "./PrototypeSortJS";
import { QuickSortCPP } from "./QuickSortCPP";
import { QuickSortJS } from "./QuickSortJS";
import { SortingAlgorithm } from "./SortingAlgorithm";

export const sortingAlgorithmNames = {
  countCPP: "Count Sort C++",
  quickCPP: "Quick Sort C++",
  countJS: "Count Sort Javascript",
  quickJS: "Quick Sort Javascript",
  prototypeJS: "Array.prototype.sort Javascript",
} as const;
export type SortingAlgorithmReadable =
  typeof sortingAlgorithmNames[keyof typeof sortingAlgorithmNames];
export type SortingAlgorithmName = keyof typeof sortingAlgorithmNames;

export function getInitializedSorters(
  emscriptenQuickSortModule: any,
  emscriptenCountSortModule: any
): Record<SortingAlgorithmName, SortingAlgorithm> {
  return {
    countCPP: new CountSortCPP(emscriptenCountSortModule),
    quickCPP: new QuickSortCPP(emscriptenQuickSortModule),
    countJS: new CountSortJS(),
    quickJS: new QuickSortJS(),
    prototypeJS: new PrototypeSortJS(),
  };
}
