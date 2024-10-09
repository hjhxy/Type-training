
type Chainable<T = {}> = {
    option: ((...args: any[]) => Chainable) extends
    (key: infer F, value: infer S) => Chainable ? Chainable<T & { [k in keyof F]: S }> : never,
    get: () => T
}

declare const config: Chainable;

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// 期望 result 的类型是：
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}


export { };