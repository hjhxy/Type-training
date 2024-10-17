
type IndexOf<T extends Array<any>, N, I extends Array<any> = []> = T extends [infer F, ...infer LAST] ? (F extends N ? I['length'] : IndexOf<LAST, N, [...I, 1]>) : -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 3], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1


export { }