

type CompareArrayLength<T1 extends any[], T2 extends any[]> = T1 extends [infer F, ...infer REST] ? (T2 extends [infer F2, ...infer REST2] ? CompareArrayLength<REST, REST2> : 1) : (T2 extends [infer F2, ...infer REST2] ? -1 : 0);


type Test01 = CompareArrayLength<[1, 2, 3], [2, 3, 4, 9]>

export { }