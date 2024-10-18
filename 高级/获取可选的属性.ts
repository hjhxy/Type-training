

type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }

export { }