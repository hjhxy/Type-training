type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1, undefined, 1]

type Last<T extends any[]> = T extends [infer F, ...infer REST] ? (REST extends [] ? F : Last<REST>) : never;

type tail1 = Last<arr1> // 应推导出 'c'
type tail2 = Last<arr2> // 应推导出 1