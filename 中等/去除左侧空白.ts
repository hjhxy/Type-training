
type TrimLeft<T extends string> = T extends `${infer F}${infer REST}` ? (F extends ' ' ? TrimLeft<REST> : T) : never;

type t = TrimLeft<"  11">

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '

export { }