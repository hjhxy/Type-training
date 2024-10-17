

type ReplaceFirst<T extends readonly unknown[], S, R, RES extends Array<any> = [], IS extends 0 | 1 = 0> = T extends [infer F, ...infer REST] ?
    (F extends S ? (IS extends 1 ? ReplaceFirst<REST, S, R, [...RES, F], IS> : ReplaceFirst<REST, S, R, [...RES, R], 1>) : ReplaceFirst<REST, S, R, [...RES, F], IS>) : RES;

type Test = ReplaceFirst<[1, 2, 3, 4, 3], 3, 4>;

type tt1 = 0 extends 1 ? 'true' : 'false';

type t1 = [1, 2, '3'] extends Array<any> ? 'true' : 'false';
type t2 = Array<any> extends any[] ? 'true' : 'false';

export { }