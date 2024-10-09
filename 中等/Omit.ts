interface Todo {
    readonly title: string
    description: string
    completed: boolean
}


type MyExclude<T1, T2> = T1 extends T2 ? never : T1;

type t = MyExclude<string | number, number>

type MyOmit<T, P> = {
    readonly [k in MyExclude<keyof T, P>]: T[k]
};


type TodoPreview = MyOmit<Todo, 'description' | 'completed'>

const todo: TodoPreview = {
    title: '',
    // completed: false,
    // 1: '2'
}