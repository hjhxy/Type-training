const tuple = [1] as const


type Concat<A1 extends readonly any[], A2 extends readonly any[]> = [...A1, ...A2]

type Result = Concat<typeof tuple, [2]> // expected to be [1, 2]

export { }