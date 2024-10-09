type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]
type arr3 = []

type Pop<T extends any[]> = T extends [] ? [] : (T extends [infer F, ...infer REST] ? (REST extends [] ? [] : [F, ...Pop<REST>]) : never);

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
type re3 = Pop<arr3> // expected to be [3, 2]