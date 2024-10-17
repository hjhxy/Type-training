type ReplaceFirst<T extends readonly unknown[], S, R, RES extends Array<any> = []> = T extends [infer F, ...infer REST] ? (F extends S ? ReplaceFirst<REST, S, R, [...RES, R]> : ReplaceFirst<REST, S, R, [...RES, F]>) : RES;


type Test = ReplaceFirst<[1, 2, 3], 3, 4>;
type Test2 = ReplaceFirst<['A', 'B', 'C', 'C'], 'C', 'D'>;
type Test3 = ReplaceFirst<[true, true, true], true, false>;
type Test4 = ReplaceFirst<[1, 'two', 3], string, 2>;


export { }