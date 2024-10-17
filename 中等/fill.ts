
type Fill<T extends Array<any>, N, NEW extends Array<any> = []> = T extends [infer F, ...infer REST] ? (Fill<REST, N, [...NEW, N]>) : NEW;

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]

export default {}