// type a = 1 | 2 | never extends number ? 'true' : 'false';

// type b1 = 1 | 2;
// type b = b1 extends infer N ? [];
type t1 = [1, 2, 3];
type getArray<T extends Array<any>, R = never> = T extends [infer F, ...infer REST] ? getArray<REST, R | F> : R;

type t2 = getArray<t1>;

type MySet<T extends Array<any>, RES extends Array<any> = []> = T extends [infer F, ...infer REST] ? (F extends getArray<RES> ? MySet<REST, [...RES]> : MySet<REST, [...RES, F]>) : RES;


// [1, 4, 5]
type t = MySet<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>


export { }