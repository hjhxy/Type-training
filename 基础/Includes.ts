
type MyEqual<T, U> = T extends U ? (U extends T ? true : false) : false;

type t = MyEqual<boolean, true>

type Includes<T extends any[], U> = T extends [infer F, ...infer REST] ? (MyEqual<F, U> extends true ? true : Includes<REST, U>) : false;

type isPillarMen = Includes<[1, 2, 3, 5, false, 7], false> // expected to be `false`


export { }