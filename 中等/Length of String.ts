

type MyLength<T extends string, N extends any[] = []> = T extends `${infer F}${infer REST}` ? MyLength<REST, [...N, 1]> : N['length'];

// type MyLength<T extends string, N extends any[] = []> =
//     T extends `${infer F}${infer REST}`
//     ? MyLength<REST, [...N, 1]>  // 继续递归
//     : N['length'];  // 当递归结束时返回 N 的长度


/*
    1. 小技巧，对于string和Array类型的数据来说都有length属性，但是Array.length可计算，而string不可计算。
    2. 对于 T extends `${infer F}${infer REST}`满足的一定满足非空。
*/
type l<T extends any[]> = T['length'];
type ls<T extends string> = T['length'];
type t = l<[]>;

type Result = MyLength<'woshi shui'>;


export { }