type Arr = ['1', '2', '3', '4', '5', '6', '7', '8']

type TupleToUnion<T extends any[]> = T extends [infer F, ...infer REST] ? (F | TupleToUnion<REST>) : never;

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'


export { }