/*
    得到若干目标属性的类型.
*/
interface Todo {
    title: string
    description: string
    completed: boolean
}
type Person = {
    title: string,
    name: string;
    age: number;
};

type MyPick<T1, T2> = {
    [K in (keyof T1 & T2)]: T1[K] // 提取公共属性
}

type t = keyof Todo & keyof Person; // 获取公共属性

// interface obj {
//     [k in keyof Todo]: string
// }

// 使用 keyof 提取键
// type PersonKeys = keyof Person;  // 'name' | 'age'

// 使用 in 遍历联合类型构造新的类型
// type StringifiedPerson = {
//     [K in keyof Todo]: string;  // 所有属性的值类型都变为 string
// };

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    // name: 'zxy'
}

export { }