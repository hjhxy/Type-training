

type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true

export { }