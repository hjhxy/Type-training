
type Fibonacci<N extends number> = N-1;

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21

export { }