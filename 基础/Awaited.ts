type baseType = Promise<string | number>
type ExampleType = Promise<baseType>

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type PromiseType<T> = {
    then: (arg: (arg: T) => any) => any
}

type r = X extends PromiseType<string> ? 'true' : 'false';

type MyAwaited<T> = T extends PromiseType<infer U> ? MyAwaited<U> : T;


type Result = MyAwaited<T> // string

// new Promise<string>((a) => {
//     return a + 0;
// })

export { }