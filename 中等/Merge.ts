type foo = {
    name: string
    age: string
}
type coo = {
    age: number
    sex: string
}


type Merge<T, F> = {
    [k in (keyof T | keyof F)]: k extends keyof F ? F[k] : (k extends keyof T ? T[k] : never);
};


type t = (string | number) | (number | boolean);

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}

const result: Result = {
    name: 'John',
    age: 25,
    sex: 'male',
}

export { }