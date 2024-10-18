

type Result = RequiredKeys<{ foo: number; bar?: string }>
// expected to be “foo”

export { }