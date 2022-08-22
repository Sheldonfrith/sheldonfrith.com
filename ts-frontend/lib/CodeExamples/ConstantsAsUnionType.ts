import { objectKeys } from "../ObjectKeys";

export type ConstantsModule = typeof import("./ConstantsDef");

export type Constant = ConstantsModule[keyof ConstantsModule];

declare namespace TestNamespace {
  const TestVal = "";
}

//example of custom type errors, not sure of the use cases
interface Animal {
  numberOfFeet: number;
  sound: string;
}
interface Cat extends Animal {
  sound: "meow";
}
interface Rock {}
type CheckTypeIsAnimal<T> = T extends Animal ? T : "Type is not an animal";

function assertIsAnimal(a: any): asserts a is Animal {
  if (
    !objectKeys(a).includes("numberOfFeet") ||
    !objectKeys(a).includes("sound")
  ) {
    //     throw new Error("assertIsString failed, is not a string: "+s);
  }
}

function funcThatCanTakeAnythingButCanOnlyDoSomethingIfItsAnAnimal<T>(
  arg: CheckTypeIsAnimal<T>
) {
  //do something, but will fail if arg is no
  assertIsAnimal(arg);
  return 2 / arg.numberOfFeet;
}

const rock: Rock = {};
const newCat: Cat = {
  sound: "meow",
  numberOfFeet: 4,
};
const an: Animal = {
  numberOfFeet: 0,
  sound: "",
};
// funcThatCanTakeAnythingButCanOnlyDoSomethingIfItsAnAnimal(rock);
funcThatCanTakeAnythingButCanOnlyDoSomethingIfItsAnAnimal(newCat);
funcThatCanTakeAnythingButCanOnlyDoSomethingIfItsAnAnimal(an);
