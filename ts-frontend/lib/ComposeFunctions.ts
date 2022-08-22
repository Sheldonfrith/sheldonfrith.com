export function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;
export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;
export function compose<Input, FirstArg, SecondArg, ThirdArg, FourthArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg,
  func4: (input: ThirdArg) => FourthArg
): (input: Input) => FourthArg;

export function compose<
  Input,
  FirstArg,
  SecondArg,
  ThirdArg,
  FourthArg,
  FifthArg
>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg,
  func4: (input: ThirdArg) => FourthArg,
  func5: (input: FourthArg) => FifthArg
): (input: Input) => FifthArg;

export function compose(...functions: any[]) {
  return (initialInput: any) =>
    functions.reduce(
      (prevReturnVal: any, thisFunc: any) => thisFunc(prevReturnVal),
      initialInput
    );
}
