

type IsFalse = 0 | "" | false | [] | {};

type MyEqual<T, F> = T extends F ? (F extends T ? 'true' : 'false') : 'false';

// T不是空数组：T extends [infer F, ...] 为true
type AnyOf<T extends any[]> = T extends [infer F, ...infer REST] ? (MyEqual<F, IsFalse> ?AnyOf<REST> : 'true') : 'false';

type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.


export { }