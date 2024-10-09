interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyExclude<T, P> = T extends P ? never : T;
type MyInclude<T, P> = T extends P ? T : never;

type MyReadonly2<T, K> = {
    [k in MyExclude<keyof T, K>]: T[k]
} & {
        readonly [k in MyInclude<keyof T, K>]: T[k]
    }

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK


export { }