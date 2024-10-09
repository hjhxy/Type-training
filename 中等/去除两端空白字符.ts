

type TrimLeft<T> = T extends `${infer F}${infer REST}` ? (F extends ' ' ? TrimLeft<REST> : T) : never;

type TrimRight<T> = T extends `${infer F}${infer REST}` ? (REST extends '' ? F : (REST extends ' '?)) : never;

type Trim<T> = TrimRight<TrimLeft<T>>;

type t = TrimLeft<' hello world  '>

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

export { };