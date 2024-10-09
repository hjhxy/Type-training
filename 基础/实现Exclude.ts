
/*
    针对联合类型，使用extends会对每个值进行判断，最终对每个值组合返回。
    比如 'a'|'b' extends 'a'实际上返回true和false，并将结果重新组合为
    联合类型返回。
*/

type MyExclude<T, E extends T> = T extends E ? 'true' : 'false';

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type p = 'a' | 'b' extends 'a' ? never : 'a' | 'b';