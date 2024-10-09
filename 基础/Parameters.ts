

const foo = (arg1: string, arg2: number): void => { }


type MyParameters<F extends (...arg: any[]) => any> = F extends (...arg: infer F) => any ? F : never;


type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

export { }