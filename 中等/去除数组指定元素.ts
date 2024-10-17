type a = [1, 2, 3];
type getEnumValue<T> = T extends number ? T : (T extends [infer F, ...infer REST] ? (F | getEnumValue<REST>) : never);
type c = getEnumValue<a>;

type Without<T, N extends (number | Array<number>), R extends any[] = []> = T extends [infer F, ...infer REST] ? (F extends getEnumValue<N> ? Without<REST, N, R> : Without<REST, N, [...R, F]>) : R;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []