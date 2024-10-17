type Fillter<T extends Array<any>, N, R extends Array<any> = []> = T extends [infer F, ...infer REST] ? (F extends N ? Fillter<REST, N, [...R, F]> : Fillter<REST, N, R>) : R;



type T = Fillter<[1, 2, 3, 4], 1>
type T2 = Fillter<[0, 1, 2, 2, 3, 4, 0], 0 | 2>